import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import {createPost} from "./contorller/posts.js"
import { register } from "./controller/auth.js"
import { verifyToken } from "./middleware/auth.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet)                                                         // to set headers
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })) // browser to allow cross requests for certain resources
app.use(morgan("common")) // give log for request and format
app.use(bodyParser.json({ limit: "30mb", extended: true }));          // to parse json encoded data in body
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));  // parse incoming url encoded data in req body and populates it
app.use(cors()); // without this client can't access API form different domain as of API as browser blocks it
app.use("/assests", express.static(path.join(__dirname, ''))) // static content

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

/** ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register) // upload.single("picture" is a middleware between route and register function)
app.post("/posts", verifyToken, upload.single("picture"), createPost); // picture is propery which is sent from frontend

/** ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3001;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));























