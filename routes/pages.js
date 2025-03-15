import express from 'express';

const router = express.Router();

router.get("/tournments", (req, res) => {
   res.render("pages/tournments");
});
 

router.get("/teamandtournament", (req, res) => {
   res.render("pages/teamsandtournments");
});
 

router.get("/livestream", (req, res) => {
   res.render("pages/livestream");
});
 

router.get("/news", (req, res) => {
   res.render("pages/news");
});
 

router.get("/communtiy", (req, res) => {
   res.render("pages/communtiy");
});
 

router.get("/aboutus", (req, res) => {
   res.render("pages/aboutus");
});

router.get("/loginForm", (req, res) => {
   res.render("pages/loginForm");
});
 
export default router;
