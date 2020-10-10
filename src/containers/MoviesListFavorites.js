import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetMovieFavorites } from "../actions/moviesAction";
import CardMoviesFavorites from "../components/CardMoviesFavorites";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 40,
  },
}));

const MovieListFavorites = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.MovieFavorites);
  React.useEffect(() => {
    FetchDataFavorites();
  }, []);

  const FetchDataFavorites = () => {
    dispatch(GetMovieFavorites());
  };

  const ShowData = () => {
    const classes = useStyles();
    if (!_.isEmpty(favorites.data)) {
      return (
        <Container maxWidth="md" className={classes.container}>
          <Grid container spacing={1}>
            {favorites.data.map((movies) => {
              return (
                <Grid item sm={3} xs={6} key={movies.imdbID}>
                  <CardMoviesFavorites movies={movies} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      );
    }

    if (favorites.loading) {
      return <p>Loading...</p>;
    }

    if (favorites.errorMsg !== "") {
      return <p>{favorites.errorMsg}</p>;
    }
    return <div>unable to get data</div>;
  };

  return <div>{ShowData()}</div>;
};

export default MovieListFavorites;
