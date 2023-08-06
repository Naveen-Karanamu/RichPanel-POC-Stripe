import mongoose from "mongoose";

const StripeSchema = new mongoose.Schema({
  customer: Number,
  items: [Object],
  payment_settings: Object,
  expand: [String],
});

// Model
export const StripeModel = mongoose.model("Stripe", StripeSchema);
