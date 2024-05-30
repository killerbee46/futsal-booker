import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  date: {
      type: Date,
      default: Date.now,
  },
});

export default mongoose.model("uploads", fileSchema);