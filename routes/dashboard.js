import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log("dashboard")
    res.render('dashboard');
});

export default router;