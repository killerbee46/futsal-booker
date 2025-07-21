import express from "express";
import { getProfile, updateProfile } from "../controllers/userController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", requireSignIn, getProfile);
router.patch("/",requireSignIn, updateProfile);

export default router