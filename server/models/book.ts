import { Schema, Document, model } from "mongoose";

interface IBook extends Document {
  title: string;
  description: string;
  author: string;
}

const User = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  author: { type: String, required: true, unique: true },
});

export default model<IBook>("Book", User);
