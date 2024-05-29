import Upload from '../models/Upload.js';
import multer from 'multer';
import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'+req?.module);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage }).single('file');

export const uploadFile = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send('Failed to upload file');
        }

        const file = new Upload({
            filename: req.file.filename,
            filepath: req.file.path,
        });

        try {
            await file.save();
            res.status(200).send('File uploaded successfully');
        } catch (error) {
            res.status(500).send('Failed to save file information');
        }
    });
};