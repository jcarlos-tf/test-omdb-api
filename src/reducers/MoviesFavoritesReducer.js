const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const MoviesFavoritesReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "MOVIE_FAVORITES_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "MOVIE_FAVORITES_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find favorities movie",
      };
    case "MOVIE_FAVORITES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default MoviesFavoritesReducer;
