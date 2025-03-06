import express from "express";
import { addBooking, getBookingByFutsal, getBookings } from "../controllers/bookingController.js";

const router = express.Router();

router.get("/", getBookings);
router.post("/add", addBooking);
router.get("/futsal", getBookingByFutsal);
// router.get("/:userId", getBookingByUser);
// router.put("/update/:id", updateFutsal);
// router.post("/delete/:id", deleteFutsal);

export default router