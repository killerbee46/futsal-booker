import express from "express";
import { createFutsal, getFutsal, getFutsals, updateFutsal } from "../controllers/futsalController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getFutsals);
router.post("/create", createFutsal);
router.get("/:id", getFutsal);
router.put("/update/:id", updateFutsal);

export default router