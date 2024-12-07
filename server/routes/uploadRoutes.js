import { Router } from 'express';
import { uploadFile, uploadedFile } from '../controllers/uploadController.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = Router();
// Get all files
router.get('/', uploadedFile);

// file upload
router.post('/', upload.single('image'), uploadFile);

export default router;
