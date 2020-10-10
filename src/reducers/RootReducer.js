import { combineReducers } from "redux";
import MoviesFavoritesReducer from "./MoviesFavoritesReducer";
import MoviesListReduccer from "./MoviesListReducer";
import MovieMultipleReducer from "./MoviesMultipleReducer";

const RootReducer = combineReducers({
  MovieList: MoviesListReduccer,
  Movie: MovieMultipleReducer,
  MovieFavorites: MoviesFavoritesReducer,
});

export default RootReducer;
