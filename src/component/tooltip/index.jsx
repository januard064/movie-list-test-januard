import React, { useState } from "react";

import styles from "./tooltip.module.css";

export const Tooltip = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.tooltipContent}>{props.children}</div>
      {isOpen && <div className={styles.tooltip}>{props.text}</div>}
    </div>
  );
};
