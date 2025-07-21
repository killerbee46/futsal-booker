import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    futsals: { 
        type: [mongoose.ObjectId],
        ref:"Futsals"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Wishlists", WishlistSchema);
