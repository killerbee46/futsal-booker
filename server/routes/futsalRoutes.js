import express from "express";
import { createFutsal, getFutsal } from "../controllers/futsalController.js";

const router = express.Router();

router.get("/", getFutsal);
router.post("/create", createFutsal);

export default router