import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./pages/landing-page";
import movieData from "./images.json";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(movieData);
  }, []);

  return (
    <div style={{ padding: "80px 20px 20px 20px" }}>
      <LandingPage movieList={movieList}/>
    </div>
  );
};

export default App;
