import express from "express";
import authRoutes from "../routes/authRoute.js"

const router = express.Router();

router.get("/",(req, res)=>{
    res.send(200, { 
        message:"Welcome to Futsal Online Api"
    })
})
router.get("/auth",authRoutes)

export default router