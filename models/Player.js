import mongoose from "mongoose";

const joinustSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  playerid: Number,
  date: { type: Date, default: Date.now }
});

export const Joinus = mongoose.model('Joinus', joinustSchema);