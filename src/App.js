import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MovieList from "./containers/MoviesList";
import Movies from "./containers/Movies";
import PrimaryNav from "./components/PrimaryNav";
import MovieListFavorites from "./containers/MoviesListFavorites";
require("dotenv").config();
function App() {
  return (
    <Route>
      <div className="app">
        <PrimaryNav />
        <Switch>
          <Route path={"/"} exact component={MovieList} />
          <Route path={"/movies/:imdbID"} exact component={Movies} />
          <Route path={"/favorites"} exact component={MovieListFavorites} />
        </Switch>
      </div>
    </Route>
  );
}

export default App;
