import { Schema, model } from "mongoose";

const user = new Schema({
    userName: String,
    email: String,
    phone: String,
    verification: String,
    password: String
}, 
{
    versionKey: false,
    timestamps: true
})

export default model('User', user)