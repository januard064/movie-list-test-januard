import React, { useState } from "react";
import styles from "./carousel.module.css";
import { NextIcon, PrevIcon } from "../icon";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpenButton, setIsOpenButton] = useState(false);

  const nextSlide = () => {
    if (currentIndex === children.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(children.length - 1);
    }
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsOpenButton(true)}
      onMouseLeave={() => setIsOpenButton(false)}
    >
      <div
        className={styles.carouselContent}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div className={styles.slide} key={index}>
            {child}
          </div>
        ))}
      </div>
      {isOpenButton && (
        <>
          <div className={styles.prevButtom} onClick={prevSlide}>
            <PrevIcon />
          </div>

          <div className={styles.nextButton} onClick={nextSlide}>
            <NextIcon />
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
