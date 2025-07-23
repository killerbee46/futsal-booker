import express from "express";
import { createFutsal, deleteFutsal, getFutsal, getFutsals, getFutsalsByOwner, getPopularFutsals, updateFutsal } from "../controllers/futsalController.js";
import { isOwnerOrMore, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getFutsals);
router.get("/owner", getFutsalsByOwner);
router.get("/popular", getPopularFutsals);
router.post("/",requireSignIn,isOwnerOrMore, createFutsal);
router.get("/:id", getFutsal);
router.patch("/:id",requireSignIn,isOwnerOrMore, updateFutsal);
router.post("/delete/:id", deleteFutsal);

export default router