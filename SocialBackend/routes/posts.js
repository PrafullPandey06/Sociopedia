import express from "express";
import {getFeedPosts, getUserPosts,likePost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/",verifyToken, getFeedPosts);
// grabbing userId to show posts of the specific User
router.get("/:userId/posts", verifyToken, getUserPosts);


/*UPDATE*/
router.patch("/:id/like",verifyToken,likePost);

export default router;