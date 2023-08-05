import express from "express";
import { SubscriptionModel } from "../../database/subscription/index.js";
import {creditCardNo} from "../../Validations/subscription.js"


const Router = express.Router()

/*
Route: /subs/:no
Description: to get specific subscriber
Access: public
Parameters: NONE
Method: GET
*/
Router.get("/:no", async (req, res) => {
    const getSpecificSub = await SubscriptionModel.findOne({ id: req.params.id })

    if (!getSpecificSub) {
        return res.json({ error: `Subscriber not found of the Credit Card Number : ${req.params.no}` })
    }

    return res.json({ subscription: getSpecificSub });
  });

  /*
Route: /subs/new
Description: to add a subscriber data
Access: public
Parameters: NONE
Method: POST
*/
Router.post("/new", async (req, res) => {
    try{
        await creditCardNo(req.body.newSubscriber);
        const newSubscriber = req.body.newSubscriber;

    // database.authors.push(newAuthor);
    const addNewSubscriber = await SubscriptionModel.create(newSubscriber);

    return (res.json({ subscribers: addNewSubscriber, message: "Subscriber added" }));
    }catch(error){
        return(res.json({error:error.message}))
    }
})

export default Router;