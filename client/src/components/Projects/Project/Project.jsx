import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { deleteProject } from "../../../actions/index";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import GitHubIcon from "@material-ui/icons//GitHub";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const Project = ({ project, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMouseOver, setMouseOver] = useState(false);
  const classes = useStyles();
  const handleMouseEnter = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  return (
    <Card>
      <CardMedia className={classes.media} image={project.selectedFile} />
      <CardContent>
        <Typography variant="h3" color="textPrimary">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Description: {project.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Tools: {project.tools}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          id="editButton"
          onClick={() => {
            setCurrentId(project._id);
            navigate(`/projects/editProject/${project._id}`);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!isMouseOver ? <MoreHorizIcon fontSize="medium" /> : "Edit"}
        </Button>
        <Button onClick={() => dispatch(deleteProject(project._id))}>
          <DeleteIcon fontSize="small" />
        </Button>
        <a className={classes.gitHub} target="_blank" href={project.gitHubRepo}>
          <GitHubIcon />
        </a>
      </CardActions>
    </Card>
  );
};

export default Project;
