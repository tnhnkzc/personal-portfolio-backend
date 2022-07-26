import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../actions/index";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { updateProject } from "../../actions/index";

const Form = ({ currentId, setCurrentId }) => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    tools: "",
    gitHubRepo: "",
    selectedFile: "",
    siteLink: "",
  });
  const classes = useStyles();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const project = useSelector((state) =>
    currentId ? state.projects.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (project) setProjectData(project);
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateProject(currentId, projectData));
      clear();
    } else {
      dispatch(createProject(projectData));
    }
    navigate("/projects");
  };

  const clear = () => {
    setCurrentId(null);
    setProjectData({
      title: "",
      description: "",
      tools: "",
      gitHubRepo: "",
      selectedFile: "",
      siteLink: "",
    });
  };

  return (
    <Paper className={classes.formContainer}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Typography>{currentId ? "Edit" : "Add"} a Project</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={projectData.title}
          onChange={(e) =>
            setProjectData({ ...projectData, title: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={projectData.description}
          onChange={(e) =>
            setProjectData({ ...projectData, description: e.target.value })
          }
        />
        <TextField
          name="tools"
          variant="outlined"
          label="Tools"
          fullWidth
          value={projectData.tools}
          onChange={(e) =>
            setProjectData({ ...projectData, tools: e.target.value })
          }
        />
        <TextField
          name="gitHubRepo"
          variant="outlined"
          label="GitHub"
          fullWidth
          value={projectData.gitHubRepo}
          onChange={(e) =>
            setProjectData({ ...projectData, gitHubRepo: e.target.value })
          }
        />
        <TextField
          name="siteLink"
          variant="outlined"
          label="Link"
          fullWidth
          value={projectData.siteLink}
          onChange={(e) =>
            setProjectData({ ...projectData, siteLink: e.target.value })
          }
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProjectData({ ...projectData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
