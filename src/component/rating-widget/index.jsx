import React from "react";
import StarIcon from "../icon/star-icon";

import styles from './rating-widget.module.css'

export const RatingWidget = (props) => {
    const {rating} = props
  return (
    <div className={styles.ratingContainer}>
      {Array.apply(null, { length: rating }).map((index) => (
        <StarIcon color={"#EDD146"} />
      ))}
      <p className={styles.ratingText}>({rating})</p>
    </div>
  );
};
