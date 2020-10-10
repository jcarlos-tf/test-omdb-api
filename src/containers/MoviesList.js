import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { GetMoviesList } from "../actions/moviesAction";
import CardMovies from "../components/CardMvovies";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 40,
  },
}));

const MovieList = (props) => {
  console.log(process.env);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const movieList = useSelector((state) => state.MovieList);
  React.useEffect(() => {
    FetchData();
  }, []);

  const FetchData = (search = "batman") => {
    dispatch(GetMoviesList(search));
  };
  const ShowData = () => {
    const classes = useStyles();
    if (!_.isEmpty(movieList.data)) {
      return (
        <Container maxWidth="md" className={classes.container}>
          <Grid container spacing={1}>
            {movieList.data.map((movies) => {
              return (
                <Grid item sm={3} xs={6} key={movies.imdbID}>
                  <CardMovies movies={movies} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      );
    }

    if (movieList.loading) {
      return <p>Loading...</p>;
    }

    if (movieList.errorMsg !== "") {
      return <p>{movieList.errorMsg}</p>;
    }
    return <div>unable to get data</div>;
  };

  return (
    <div>
      <div>
        <p>Search: </p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        {/* <button onClick={() => props.history.push(`/${search}`)}>Search</button> */}
      </div>
      {ShowData()}
    </div>
  );
};

export default MovieList;
