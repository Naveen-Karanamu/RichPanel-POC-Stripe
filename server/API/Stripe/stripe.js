import express from "express";

const Router = express.Router();

import Stripe from "stripe"

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

Router.post('/new', async (req, res) => {
    try{
      const {paymentMethod}=req.body;

    // Customer
    const customer=await stripe.customers.create({
      payment_method:paymentMethod,
      invoice_settings:{default_payment_method:paymentMethod}
    })

    // Create a product
    const product=await stripe.products.create({
      name:"Monthly Subscription",
    })

    // Create a Subscription
    const subscription =await stripe.subscriptions.create({
      customer:customer.id,
      items:[
        {
          price_data:{
            currency:'INR',
            product:product.id,
            unit_amount:"500",
            recurring:{
              interval:'month'
            }
          }
        }
      ],
      payment_settings:{
        payment_method_types: ['card'],
        save_default_payment_method:'on_subscription'
      },
      expand:['latest_invoice.payment_intent']
    })
    res.json({message:'Subscription done', clientSecret:subscription.latest_invoice.payment_intent.client_secret})

    }catch(error){
      res.status(500).json({message:"Internal Server Error"})
    }
  });

export default Router; 