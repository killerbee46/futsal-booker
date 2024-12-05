
class UploadController {
  async upload(req, res) {
    try {
      const { error } = await uploadSchema.validate(req.body);
      if (error) {
        return responseFormatter(req, res, 400, error?.details[0]?.message);
      }

      const uploadedFiles = req.files?.files;

      const uploadedDocuments = [];

      const directory = req.body?.directory || "";
      const type = req.body?.type || "";
      const fieldName = "files";

      if (uploadedFiles) {
        if (uploadedFiles instanceof Array && uploadedFiles instanceof Object) {
          uploadedDocuments.push(
            ...multipleFileUpload(req, directory, fieldName, true, type)
          );
        } else if (uploadedFiles instanceof Object) {
          uploadedDocuments.push(
            fileUpload(req, directory, fieldName, true, type)
          );
        }
      } else {
        return responseFormatter(req, res, 400, "no files to upload");
      }

      return responseFormatter(req, res, 201, uploadedDocuments);
    } catch (e) {
      return responseFormatter(
        req,
        res,
        e instanceof FileUploadError ? 400 : 500,
        e
      );
    }
  }
}

export default UploadController;
