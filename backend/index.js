import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { Joinus } from './models/Player.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// Set up EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views', './views');

mongoose.connect("mongodb://127.0.0.1:27017/Player")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    const newPlayer = new Joinus({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.userName,
        playerid: req.body.id,
    });

    newPlayer.save()
      .then(() => {
          console.log("request success");
          res.render("player"); // Rendering the player.ejs page
      })
      .catch(err => {
          console.error("Error saving player:", err);
          res.status(500).send("Error saving player.");
      });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
