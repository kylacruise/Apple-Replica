import React from "react";
import styles from "./productCard.module.scss";
export default function ProductCard({ product }) {
   return (
      <>
         {product?.map(({ name, generation, price, monthly, image, color }) => (
            <div className={styles.card}>
               <h2>{name}</h2>
               <span>{generation ? `(${generation})` : ""}</span>
               <div className={styles.image}>
                  <img src={image} alt={name} />
               </div>
               <div className={styles.colour}>
                  {color.map((name) => (
                     <div
                        style={{
                           backgroundColor: `${name}`,
                           height: "20px",
                           width: "20px",
                           borderRadius: "100px",
                           border: "1px solid #ccc",
                        }}
                     ></div>
                  ))}
               </div>
               <div className={styles.buy}>
                  <span>
                     From ${price} or ${monthly}/mo. for 12 mos.*
                  </span>
                  <button>Buy</button>
               </div>
            </div>
         ))}
      </>
   );
}
