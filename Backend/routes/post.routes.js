import express from "express";
import { getPosts, post } from "../controllers/post.controllers.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";

const router = express.Router();

router.post("/", protectRoute, post);
router.get("/getall", protectRoute, getPosts);

export default router;
