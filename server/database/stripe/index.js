import mongoose from "mongoose"

const StripeSchema=new mongoose.Schema({
    no: {
        type:Number,
        required:true,
        minLenght:15
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
export const StripeModel = mongoose.model("Stripe", StripeSchema);