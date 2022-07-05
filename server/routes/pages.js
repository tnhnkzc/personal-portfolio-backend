import express from "express";
import {
  homePage,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/pages.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", homePage);
router.get("/projects", getProjects);
router.post("/projects/createProject", auth, createProject);
router.patch("/projects/editProject/:id", auth, updateProject);
router.delete("/projects/:id", auth, deleteProject);

export default router;
