import express from 'express';
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';
import {community} from '../models/Community.js';

const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
    const newPost = new community({
        title: req.body.title,
        content: req.body.description
    });
    // console.log(newNews);
    newPost.save().then(() => res.json({ message: "Post created successfully" }))

    // res.json({ message: "File uploaded successfully", filePath: `/uploads/${req.file.filename}` });
});

router.post('/getPosts',(req, res) => {
    community.find()
   .then(community => res.json(community));
})

export default router;
