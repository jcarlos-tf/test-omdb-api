import axios from "axios";
const base_url_api = process.env.REACT_APP_API_BASE_URL;
const base_url_node = process.env.REACT_APP_NODE_URL;
export const GetMoviesList = (nameMovie) => async (dispatch) => {
  try {
    dispatch({
      type: "MOVIES_LIST_LOADING",
    });

    const res = await axios.get(`${base_url_api}s=${nameMovie}`);

    dispatch({
      type: "MOVIES_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "MOVIES_LIST_FAIL",
    });
  }
};
/*
Title:"Batman Begins"
Year:"2005"
imdbID:"tt0372784"
Type:"movie"
Poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
*/

export const GetMovieDetails = (imdbID) => async (dispatch) => {
  try {
    dispatch({
      type: "MOVIE_MULTIPLE_LOADING",
    });

    const res = await axios.get(`${base_url_api}i=${imdbID}`);

    dispatch({
      type: "MOVIE_MULTIPLE_SUCCESS",
      payload: res.data,
      movieName: imdbID,
    });
  } catch (e) {
    dispatch({
      type: "MOVIE_MULTIPLE_FAIL",
    });
  }
};

export const GetMovieFavorites = () => async (dispatch) => {
  try {
    dispatch({
      type: "MOVIE_FAVORITES_LOADING",
    });

    const res = await axios.get(
      `${base_url_node}/api/v1/favorites/get-favorites`
    );

    dispatch({
      type: "MOVIE_FAVORITES_SUCCESS",
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: "MOVIE_FAVORITES_FAIL",
    });
  }
};
