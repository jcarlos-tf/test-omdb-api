import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
const base_url_node = process.env.REACT_APP_NODE_URL;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    marginBottom: 15,
  },
  color: {
    background: null,
  },
  color1: {
    background: "red",
  },
  background: {
    height: 115,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "button",
    justifyContent: "center",
  },
  image: {
    position: "relative",
    height: 350,
    [theme.breakpoints.down("xs")]: {
      width: "100 !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.9,
      },
    },
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.8,
    transition: theme.transitions.create("opacity"),
  },
}));

const CardMovies = ({ movies }) => {
  const classes = useStyles();
  const [favorites, setOn] = useState(true);

  const lightSwitch = () => {
    setOn((favorites) => !favorites);

    if (favorites) {
      const setData = axios
        .post(`${base_url_node}/api/v1/favorites/create`, {
          Title: movies.Title,
          Year: movies.Year,
          imdbID: movies.imdbID,
          Type: movies.Type,
          Poster: movies.Poster,
          favorite: true,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  return (
    <Card className={classes.root}>
      <div className={classes.image}>
        <CardMedia
          className={classes.imageBackdrop}
          image={movies.Poster}
          title={movies.Title}
        >
          <div className={classes.background}></div>
        </CardMedia>
      </div>
      <CardContent>
        <div>{movies.Title}</div>
        <IconButton
          aria-label="add to favorites"
          className={favorites ? classes.color : classes.color1}
          onClick={lightSwitch}
        >
          <FavoriteIcon />
        </IconButton>

        <Button size="small" color="primary">
          <Link to={`/movies/${movies.imdbID}`}>View</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardMovies;
