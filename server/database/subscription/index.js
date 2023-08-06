import mongoose from "mongoose"

const SubscriptionSchema=new mongoose.Schema({
    planName:{type:String},
    price: {
        type:String,
    },
    videoQuality: {
        type:String,
    },
    resolution: {
        type:String,
    },
    devices: {
        type:[String],
    },
    screns: {
        type:Number,
    },
    planType:{
        type:String
    },
    planName:{
        type:String
    }
})

// Model
export const SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema);