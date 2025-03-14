import express from 'express';
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';
import { Tournment } from '../models/tournment.js';

const router = express.Router();

router.post("/", (req, res) => {

    const newTournment = new Tournment({
        title: req.body.title,
        date: req.body.date,
        prize: req.body.prize
    });
    // console.log(newNews);
    newTournment.save().then(() => res.json({ message: "News Post created successfully" }))

    // res.json({ message: "File uploaded successfully", filePath: `/uploads/${req.file.filename}` });
});

router.post('/getPosts',(req, res) => {
    Tournment.find()
   .then(tournment => res.json(tournment));
})

export default router;
