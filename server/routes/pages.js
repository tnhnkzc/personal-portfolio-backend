import express from "express";
import {
  homePage,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/pages.js";

const router = express.Router();

router.get("/", homePage);
router.get("/projects", getProjects);
router.post("/projects/createProject", createProject);
router.patch("/projects/editProject/:_id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;
