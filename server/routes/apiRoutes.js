import express from "express";
import authRoutes from "./authRoute.js"
import futsalRoutes from "./futsalRoutes.js"
import userRoutes from "./userRoutes.js"
import bookingRoutes from "./bookingRoutes.js"
import profileRoutes from "./profileRoutes.js"
import wishlistRoutes from "./wishlistRoutes.js"

const router = express.Router();

router.get("/",(req, res)=>{
    res.send(200, { 
        message:"Welcome to Futsal Online Api"
    })
})
router.use("/auth",authRoutes)
router.use("/futsals", futsalRoutes);
router.use("/users", userRoutes);
router.use("/bookings", bookingRoutes);
router.use("/profile", profileRoutes);
router.use("/wishlist", wishlistRoutes);

export default router