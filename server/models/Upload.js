import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  type: String,
  module: String,
  file:Buffer
});

export default mongoose.model("uploads", fileSchema);