import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import Tvshows from "./Components/Tvshows";
import Peoples from "./Components/Peoples";
import PersonDetails from "./Components/PersonDetails";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import Trailer from "./Components/templetes/Trailer";

const App = () => {
  return (
    <div className="w-screen h-screen flex bg-zinc-800">
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/trending" element=<Trending /> />
        <Route path="/popular" element=<Popular /> />
        <Route path="/movie" element=<Movies /> />
        <Route path="/tvshows" element=<Tvshows /> />
        <Route path="/people" element=<Peoples /> />
        <Route path="/person/details/:id" element=<PersonDetails /> />
        <Route path="/movie/details/:id" element=<MovieDetails />>
          <Route path="/movie/details/:id/trailer" element=<Trailer /> />
        </Route>
        <Route path="/tv/details/:id" element=<TvDetails />>
          <Route path="/tv/details/:id/trailer" element=<Trailer /> />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
