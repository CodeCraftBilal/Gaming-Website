import express from 'express';
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';
import {News} from '../models/News.js';

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
    destination: "./uploads/news",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Handle file upload request
router.post("/", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const newNews = new News({
        title: req.body.title,
        content: req.body.description,
        path: `/uploads/news/${req.file.filename}`
    });
    // console.log(newNews);
    newNews.save().then(() => res.json({ message: "News Post created successfully" }))

    // res.json({ message: "File uploaded successfully", filePath: `/uploads/${req.file.filename}` });
});

router.post('/getPosts',(req, res) => {
    News.find()
   .then(news => res.json(news));
})

export default router;
