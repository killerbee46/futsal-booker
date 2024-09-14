import { saveFile } from "../middlewares/uploadMiddleware.js";
import Upload from "../models/Upload.js";

export const uploadedFile = async (req, res) => {
  try {
    const users = await Upload.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const uploadFile = async (req, res) => {
  // if (!req.files || !req.files.file) {
    return res.status(200).json({ message: req });
  // }

  const avatarFile = req.files.file;
  let avatarPath;
  try {
    avatarPath = await saveFile(avatarFile);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  const upload = new Upload({
    module: req.body.module,
    type: req.body.type,
    file: file // Store file path in avatar field
  });

  try {
    const newUpload = await upload.save();
    res.status(201).json(newUpload);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}