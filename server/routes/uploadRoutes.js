import { Router } from 'express';
import { uploadFile, uploadedFile } from '../controllers/uploadController.js';

const router = Router();

// Get all users
router.get('/', uploadedFile);

// Create a new user with file upload
router.post('/', uploadFile);

export default router;
