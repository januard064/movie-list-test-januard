import React from "react";

import { PhotoGalery, Tooltip } from "../component";
import styles from "./landing-page.module.css";
import Carousel from "../component/carousel";

const LandingPage = (props) => {
  const { movieList } = props;

  return (
    <div>
      <Carousel>
        <img
          src="https://via.placeholder.com/640x480.png/005544?text=Animal+qui"
          alt="carousel"
          style={{ width: "100%", height: "450px", objectFit: "cover" }}
        />
        <img
          src="https://via.placeholder.com/640x480.png/005544?text=Animal+qui"
          alt="carousel"
          style={{ width: "100%", height: "450px", objectFit: "cover" }}
        />
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
