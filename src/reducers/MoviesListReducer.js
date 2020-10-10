const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const MoviesListReduccer = (state = DefaultState, action) => {
  switch (action.type) {
    case "MOVIES_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "MOVIES_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get movies",
      };
    case "MOVIES_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.Search,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default MoviesListReduccer;
