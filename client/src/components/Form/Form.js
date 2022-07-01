import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { createProject } from "../../actions/index";
import useStyles from "./styles";

const Form = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    tools: "",
    selectedFile: "",
  });
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createProject(projectData));
  };

  return (
    <Paper className={classes.container}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography>Add a Project</Typography>
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
        <FileBase
          type="file"
          multiple={true}
          ondone={({ base64 }) =>
            setProjectData({ ...projectData, selectedFile: base64 })
          }
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
