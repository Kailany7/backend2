import multer from "multer";
import path from "path";
import fs from "fs";

// Caminho correto para a pasta uploads na RAIZ do projeto
const uploadPath = path.join(process.cwd(), "uploads");

// Garante que a pasta exista
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

export const upload = multer({ storage });
