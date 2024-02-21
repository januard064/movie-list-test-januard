import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./pages/landing-page";
import movieData from "./images.json";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featureMovie, setFeatureMovie] = useState([]);

  useEffect(() => {
    setMovieList(movieData);
  }, []);

  useEffect(() => {
    const featured = movieList.filter((movie) => movie.is_featured === true);
    setFeatureMovie(featured);
  }, [movieList]);

  return (
    <div style={{ padding: "80px 20px 20px 20px" }}>
      <LandingPage movieList={movieList} featureMovie={featureMovie} />
    </div>
  );
};

export default App;
