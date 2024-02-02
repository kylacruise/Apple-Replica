import React from "react";
import styles from "./trade.module.scss";
export default function TradeCard({ heading, name, image, description }) {
   return (
      <div
         style={{ backgroundImage: `url(${image}` }}
         className={styles.container}
      >
         <span>{heading}</span>
         <h2>{name}</h2>
         <div className={styles.description}>
            {!description ? "" : description}
         </div>
      </div>
   );
}
