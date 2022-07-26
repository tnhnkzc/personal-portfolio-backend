import mongoose from "mongoose";
import Project from "../models/projects.js";
import EmailSender from "../SendEmail.js";

export const homePage = (req, res) => {};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const project = req.body;
  const newProject = new Project(project);
  try {
    newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id: _id } = req.params;
  const project = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No project with that id!");
  const updatedProject = await Project.findByIdAndUpdate(
    _id,
    { ...project, _id },
    { new: true }
  );
  res.json(updatedProject);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No project with that id.");

  await Project.findByIdAndRemove(id);
};

export const emailSender = async (req, res) => {
  try {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    EmailSender(fullName, email, subject, message);
    res.json({ msg: "Your message is successfully sent" });
  } catch (error) {
    res.status(404).json(error);
  }
};
