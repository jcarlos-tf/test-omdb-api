import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetMovieDetails } from "../actions/moviesAction";

const Movies = (props) => {
  const movieName = props.match.params.imdbID;
  const dispatch = useDispatch();
  const movieState = useSelector((state) => state.Movie);

  React.useEffect(() => {
    dispatch(GetMovieDetails(movieName));
  }, []);
  console.log("name", movieState);
  const ShowData = () => {
    if (!_.isEmpty(movieState.data[movieName])) {
      const movieData = movieState.data[movieName];
      return (
        <div>
          <div>{movieData.Title}</div>
          <div>{movieData.Year}</div>
          <div>{movieData.Released}</div>
          <div>{movieData.Genre}</div>
          <div>{movieData.Director}</div>
          <div>{movieData.Writer}</div>
          <div>{movieData.Actors}</div>
          <div>{movieData.Plot}</div>
          <div>{movieData.Country}</div>
          <div>{movieData.Production}</div>
          <div>{movieData.Poster}</div>
        </div>
      );
    }

    if (movieState.loading) {
      return <p>Loading...</p>;
    }

    if (movieState.errorMsg !== "") {
      return <p>{movieState.errorMsg}</p>;
    }

    return <p>error getting movie</p>;
  };

  return (
    <div className={"mive"}>
      <h1>{movieName}</h1>
      {ShowData()}
    </div>
  );
};
export default Movies;
