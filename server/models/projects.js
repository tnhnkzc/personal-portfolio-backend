import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tools: {
    type: String,
    required: true,
  },
  selectedFile: String,
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
