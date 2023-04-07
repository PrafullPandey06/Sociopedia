import express from "express";
import { login } from "../contorller/auth.js";

const router = express.Router();

router.post("/login", login); // "/auth/login" - index.js

export default router;