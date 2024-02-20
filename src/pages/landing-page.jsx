import React from "react";

import { PhotoGalery, Tooltip } from "../component";
import styles from "./landing-page.module.css";

const LandingPage = (props) => {
  const { movieList } = props;

  return (
    <div>
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
