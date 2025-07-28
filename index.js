import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { Joinus } from './models/Player.js';
import path from 'path';
import { fileURLToPath } from 'url';
import news from './routes/news.js'
import community from './routes/community.js';
import tournment from './routes/tournment.js'
import pages from './routes/pages.js';
import dashboard from './routes/dashboard.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

const port = 3000;


// Set up EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect("mongodb://127.0.0.1:27017/Player")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

app.use('/admin', dashboard)
app.use('/upload-news', news);
app.use('/upload-community', community);
app.use('/upload-tournment', tournment)
app.use('/pages', pages);

app.get('/', (req, res) => {
    res.render('index');
})


app.post('/submit', (req, res) => {
    console.log("Admin login successful");
    const newPlayer = new Joinus({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.userName,
        playerid: req.body.id,
    });

    newPlayer.save()
        .then(() => {
            console.log("request success");
            res.render("player", { root: __dirname }); // Rendering the player.ejs page
        })
        .catch(err => {
            console.error("Error saving player:", err);
            res.status(500).send("Error saving player.");
        });
});

app.post('/login', (req, res) => {
    console.log("Admin login requested");
    if (req.body.email === 'admin@gmail.com' && req.body.password === "admin") {
        res.json({ success: true });
    }
    else {
        res.json({ success: false });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
