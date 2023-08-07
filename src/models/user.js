import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    about: String,
    profileURL: String
});

export const User = mongoose.model("users", UserSchema);