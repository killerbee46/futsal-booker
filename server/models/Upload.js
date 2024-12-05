import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  type: String,
  module: String,
  file:Buffer,
  filename: String,
  filepath: String,
  date: {
      type: Date,
      default: Date.now,
  },
});

export default mongoose.model("uploads", fileSchema);