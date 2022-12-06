import { Schema, model } from "mongoose";

const store = new Schema({
    nombre : String,
    estado : String
},
{
    versionKey: false,
    timestamps: true
})

export default  model('stores', store);