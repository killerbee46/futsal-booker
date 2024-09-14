import { UploadedFile } from "express-fileupload";
import * as dayjs from "dayjs";
import * as fs from "fs";

const ALLOWED_IMAGE_MIMES = ["image/jpeg", "image/png", "image/jpg"];
const ALLOWED_DOC_MIMES = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
];

const BASE_UPLOAD_PATH = __dirname + "/../public/uploads/";
const BASE_DELETE_PATH = __dirname + "/../public/";

export class FileUploadError extends Error {
  constructor(message, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FileUploadError);
    }
    this.name = "FileUploadError";
    this.message = message;
    this.toString = () => this.message;
  }
}

export const validateFileType = (fileMime: any, type: string): boolean => {
  if (type && type !== "" && fileMime) {
    if (type === "image") {
      return ALLOWED_IMAGE_MIMES.includes(fileMime);
    } else if (type === "doc") {
      return ALLOWED_DOC_MIMES.includes(fileMime);
    }
    else if (type === "all") {
      return true;
    }
  }
  return false;
};

const upload = (
  uploadedFile: UploadedFile,
  type: string,
  directory: string
) => {
  try {
    if (!validateFileType(uploadedFile?.mimetype, type)) {
      throw new FileUploadError("invalid file type");
    } else {
      const uploadedFileName = uploadedFile?.name || "";

      if (uploadedFileName === "") {
        throw new FileUploadError("invalid file name");
      }
      const uploadedFileExtension = uploadedFileName?.split(".")[1] || "";

      if (uploadedFileExtension === "") {
        throw new FileUploadError("invalid file extension");
      }

      // const randomString = Math.random().toString(36).substring(7);

      const realName = uploadedFileName?.split(".")?.slice(0, -1)?.join(".");

      const fileName = `${realName}-${dayjs().format(
        "YYYY-MM-DD mm:ss"
      )}.${uploadedFileExtension}`;

      const uploadPath = BASE_UPLOAD_PATH + directory + `/${type}s/` + fileName;

      // Use the mv() method to place the file somewhere on your server
      uploadedFile.mv(uploadPath);

      return fileName;
    }
  } catch (e) {
    throw e;
  }
};

export const fileUpload = (
  req: Request,
  directory: string,
  field: string,
  isRequired: boolean = false,
  type: string = "image"
): string => {
  try {
    let uploadedFile = req.files[field] as UploadedFile;

    if (!uploadedFile || Object.keys(uploadedFile).length === 0) {
      if (isRequired) {
        throw new FileUploadError("no files uploaded for field " + field);
      } else {
        return "";
      }
    } else {
      return upload(uploadedFile, type, directory);
    }
  } catch (e) {
    throw e;
  }
};

export const multipleFileUpload = (
  req: Request,
  directory: string,
  field: string,
  isRequired: boolean = false,
  type: string = "image"
): string[] => {
  try {
    let uploadedFiles = req.files[field] as UploadedFile[];

    if (!uploadedFiles || Object.keys(uploadedFiles).length === 0) {
      if (isRequired) {
        throw new FileUploadError("no files uploaded for field " + field);
      } else {
        return [];
      }
    }

    let fileNames = [];
    Object.values(uploadedFiles).forEach((file) => {
      const fileName = upload(file, type, directory);
      fileNames.push(fileName);
    });
    return fileNames;
  } catch (e) {
    throw e;
  }
};

export const fileDelete = async (
  fileName: string,
  type: string = "image",
  directory: string = ""
): Promise<void> => {
  try {
    const filePath =
      directory && directory !== null
        ? BASE_UPLOAD_PATH + directory + `/${type}s/` + fileName
        : BASE_DELETE_PATH + fileName;
    if (await fs.existsSync(filePath)) {
      await fs.unlinkSync(filePath);
    }
  } catch (e) {
    throw e;
  }
};
