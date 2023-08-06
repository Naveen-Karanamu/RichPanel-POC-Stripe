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

    // Create a customer and associate the payment method
    const customer = await stripe.customers.create({
      payment_method: paymentMethod,
      invoice_settings: { default_payment_method: paymentMethod },
    });

    // Create a product
    const product = await stripe.products.create({
      name: "Monthly Subscription",
    });

    // Create a price for the product
    const price = await stripe.prices.create({
      currency: "INR",
      product: product.id,
      unit_amount: 20000000,
      recurring: {
        interval: "month",
      },
    });

    // Create a Subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });

    // For MongoDB

    const stripeData = {
      customer: customer.id,
      items: [{ price: price.id }],
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
    const idAsString = id.toString();

    // Delete the subscription from Stripe
    // await stripe.subscriptions.del(idAsString);

    // Delete the data from MongoDB
    const deletedSubscription = await StripeModel.findOneAndDelete({ customer: idAsString });

    if (!deletedSubscription) {
      // If no subscription was found in the database with the given customer ID
      return res.status(404).json({ message: "Subscription not found in the database." });
    }

    res.json({ message: "Subscription deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default Router;
