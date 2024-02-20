import React from "react";

import styles from "./photo-galery.module.css";

import { RatingWidget } from "../rating-widget";

export const PhotoGalery = ({ movie }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={movie.image_url} alt={movie.title} className={styles.image} />
      <RatingWidget rating={movie.rating} />
      <div className={styles.movieTitle}>{movie.title}</div>
    </div>
  );
};
