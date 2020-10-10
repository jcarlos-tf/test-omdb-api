import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
      width: "100 !important", // Overrides inline-style
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

const CardMoviesFavorites = ({ movies }) => {
  const classes = useStyles();

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
    </Card>
  );
};

export default CardMoviesFavorites;
