import express from "express";

import { signin, signup } from "../controllers/user.js";

const router = express.Router();

router.post("/auth/signin", signin);
router.post("/auth/signup", signup);
