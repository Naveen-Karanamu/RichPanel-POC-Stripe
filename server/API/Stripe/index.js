import express from "express";

const Router = express.Router();

import Stripe from "stripe";
import { StripeModel } from "../../database/stripe/index.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/*
Route: /stripe/new
Description: to create a new subscription
Access: public
Parameters: NONE
Method: POST
*/

Router.post("/new", async (req, res) => {
  try {
    const { paymentMethod } = req.body;

    // Customer
    const customer = await stripe.customers.create({
      payment_method: paymentMethod,
      invoice_settings: { default_payment_method: paymentMethod },
    });

    // Create a product
    const product = await stripe.products.create({
      name: "Monthly Subscription",
    });

    // Create a Subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: "INR",
            product: product.id,
            unit_amount: "500",
            recurring: {
              interval: "month",
            },
          },
        },
      ],
      payment_settings: {
        payment_method_types: ["card"],
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
    });

    // For MongoDb

    const stripeData = {
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: "INR",
            product: product.id,
            unit_amount: "500",
            recurring: {
              interval: "month",
            },
          },
        },
      ],
      payment_settings: {
        payment_method_types: ["card"],
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
    };
    const addStripeData = await StripeModel.create(stripeData);

    return res.json({
      message: "Subscription done",
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      stripe: addStripeData,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", Error: error });
  }
});

/*
Route: /stripe/del/:id
Description: to delete specific Subscription
Access: public
Parameters: NONE
Method: DELETE
*/

Router.delete("/del/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // // Retrieve the subscription from the Stripe application
    const subscription = await stripe.subscriptions.retrieve(id);

    // // Delete the subscription from Stripe
    await stripe.subscriptions.del(id);

    // Delete the data from MongoDB
    await StripeModel.findOneAndDelete({ customer: subscription.customer });
    // await StripeModel.findOneAndDelete({ customer: id });

    res.json({ message: "Subscription deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default Router;
