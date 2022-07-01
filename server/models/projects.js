import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: String,
  description: String,
  tools: String,
  selectedFile: String,
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
