import React from "react";

import styles from "./photo-galery.module.css";

import { RatingWidget } from "../rating-widget";
import { Tooltip } from "../tooltip";

export const PhotoGalery = () => {
  return (
    <div className={styles.cardContainer}>
      <img
        src={"https://via.placeholder.com/640x480.png/005544?text=Animal+qui"}
        alt="Galery Photo"
        className={styles.image}
      />
      <RatingWidget rating={4} />
      <div className={styles.movieTitle}>Facere blanditiis ducimus facere.</div>
    </div>
  );
};
