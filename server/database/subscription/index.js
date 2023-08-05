import mongoose from "mongoose"

const SubscriptionSchema=new mongoose.Schema({
    no: {
        type:Number,
    },
    price: {
        type:String,
    },
    v_quality: {
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
})

// Model
export const SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema);