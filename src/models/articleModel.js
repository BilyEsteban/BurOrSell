import { Schema, model } from "mongoose";

const article = new Schema({
    userID: String,
    nameArticle: String,
    comment: String,
    imagenes: String,
    condictions: String,
    price: Number,
    auction: String,
    requireVerication: String,
    imagenID: String
},
{
    versionKey: false,
    timestamps: true
})

export default model('Article', article)
