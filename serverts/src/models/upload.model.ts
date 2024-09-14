import { Schema, model } from 'mongoose';

interface IUpload {
  filename: string;
  path: string;
}

const uploadSchema = new Schema<IUpload>({
    filename: {
      type: String,
      required: true,
      trim: true,
    },
    path: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true });

const Upload = model<IUpload>('Upload', uploadSchema);

export default Upload;
