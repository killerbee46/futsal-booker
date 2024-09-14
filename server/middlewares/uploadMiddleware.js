import fileUpload from 'express-fileupload';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const uploadMiddleware = fileUpload({
  limits: { fileSize: 2 * 1024 * 1024 },
  abortOnLimit: true,
  useTempFiles: true,
  tempFileDir: path.join(__dirname, '../../tmp')
});

export const saveFile = (file, folder='uploads',module,type) => {

  const uploadPath = path.join(__dirname, '../../'+module+"/"+type, folder);
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }
  const fileName = `${file.name}-${Date.now()}${path.extname(file.name)}`;
  const filePath = path.join(uploadPath, fileName);

  return new Promise<string>((resolve, reject) => {
    file.mv(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(filePath);
      }
    });
  });
};

export default uploadMiddleware;