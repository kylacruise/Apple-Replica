import React from "react";
import styles from "./entertainment.module.scss";
export default function EntertainmentCard({
   heading,
   name,
   image,
   description,
}) {
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
