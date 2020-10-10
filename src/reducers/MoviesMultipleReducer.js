const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const MovieMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "MOVIE_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "MOVIE_MULTIPLE_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find detail movie",
      };
    case "MOVIE_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.movieName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default MovieMultipleReducer;
