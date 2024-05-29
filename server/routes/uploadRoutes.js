import express from "express";
import { downloadFile, getListFiles, uploadFiles } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/upload", uploadFiles);
router.get("/uploads", getListFiles);
router.get("/uploads/:name", downloadFile);

export default router