import mongoose from "mongoose";

const tournmentSchema = new mongoose.Schema({
    title: String,
    date: Date,
    prize: Number
});

export const Tournment = mongoose.model('Tournment', tournmentSchema);