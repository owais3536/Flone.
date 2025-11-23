import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (request, file, callback) {
        callback(null, `${Date.now()}-${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });
export default upload;