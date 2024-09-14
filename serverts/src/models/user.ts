import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  photo: Buffer;
  status: string;
  password: string;
  phone: string;
  address: string;
  teamId: number;
  penalty: number;
  role: number;
}

const userSchema = new Schema<IUser>({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo:{
        data: Buffer,
        contentType: String,
    },
    status:{
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    teamId: {
      type: Number,
      required: false,
    },
    penalty: {
      type: Number,
      required: false,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true });

const User = model<IUser>('User', userSchema);

export default User;
