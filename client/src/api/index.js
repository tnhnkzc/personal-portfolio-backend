import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchProjects = () => API.get("/projects");

export const createProject = (newProject) =>
  API.post("/projects/createProject", newProject);

export const updateProject = (id, updatedProject) =>
  API.patch(`/projects/editProject/${id}`, updatedProject);

export const deleteProject = (id) => API.delete(`/projects/${id}`);
