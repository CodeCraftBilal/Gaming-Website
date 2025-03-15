import express from 'express';

const router = express.Router();

console.log("directed to dashboard")

router.get('/dashboard', (req, res) => {
    console.log("dashboard")
    res.render('dashboard');
});

export default router;