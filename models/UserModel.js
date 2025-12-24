import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

const User = models.User || model("User", UserSchema);

export default User;
