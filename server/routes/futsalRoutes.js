import express from "express";
import { createFutsal, deleteFutsal, getFutsal, getFutsals, updateFutsal } from "../controllers/futsalController.js";

const router = express.Router();

router.get("/", getFutsals);
router.post("/create", createFutsal);
router.get("/:id", getFutsal);
router.put("/update/:id", updateFutsal);
router.post("/delete/:id", deleteFutsal);

export default router