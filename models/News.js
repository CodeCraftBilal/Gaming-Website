import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: String,
    content: String,
    path: String
});

export const News = mongoose.model('News', newsSchema);