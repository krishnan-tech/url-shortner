import { Document, model, Schema } from "mongoose";

export interface UrlSchema extends Document {
  creator: string;
  original_url: string;
  alias: string;
  new_url: string;
  url_password: string;
  createdAt: string;
  updatedAt: string;
}

const urlSchema: Schema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    original_url: {
      type: String,
      require: true,
    },
    alias: {
      type: String,
      require: true,
    },
    new_url: {
      type: String,
      require: true,
    },
    url_password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<UrlSchema>("Url", urlSchema);
