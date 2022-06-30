import express from "express";
import { homePage, getProjects, createProject } from "../controllers/pages.js";

const router = express.Router();

router.get("/", homePage);
router.get("/projects", getProjects);
router.post("/projects/createProject", createProject);

export default router;
