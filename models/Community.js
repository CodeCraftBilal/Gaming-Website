import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    title: String,
    content: String
});

export const community = mongoose.model('community', communitySchema);