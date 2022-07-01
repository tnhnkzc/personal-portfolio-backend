import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
const Project = ({ project }) => {
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
          onClick={() => {}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!isMouseOver ? <MoreHorizIcon fontSize="medium" /> : "Edit"}
        </Button>
        <Button onClick={() => {}}>
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
