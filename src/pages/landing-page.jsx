import React from "react";

import { PhotoGalery, Tooltip } from "../component";
import styles from "./landing-page.module.css";
import Carousel from "../component/carousel";

const LandingPage = (props) => {
  const { movieList, featureMovie } = props;

  return (
    <div>
      <Carousel>
        {featureMovie.map((movie, index) => (
          <img
            src={movie.image_url}
            alt={movie.title}
            style={{ width: "100%", height: "450px", objectFit: "cover" }}
          />
        ))}
      </Carousel>

      <div className={styles.gridListMovie}>
        {movieList.map((movie, index) => (
          <Tooltip text={movie.title}>
            <PhotoGalery movie={movie} />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
