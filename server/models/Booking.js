import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Futsals",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Booked",
      enum: ["Booked", "Cancelled"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
