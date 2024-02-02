import React from "react";
import styles from "./product.module.scss";
import ProductCard from "../card/productCard";
import EntertainmentCard from "../entertainment/entertainment";
import { data, dataSecond, dateThird } from "../data/dataFirst";
import TradeCard from "../trade/trade";
export default function ProductOne() {
   return (
      <div className={styles.container}>
         <div className={styles.prdGrid}>
            <h2>
               <b>All Models.</b> Take your pick.
            </h2>
            <div className={styles.g}>
               {data.map(({ name, product, color }) => (
                  <ProductCard product={product} />
               ))}
            </div>
         </div>
         <div className={styles.prdGrid}>
            <h2>
               <b>Shopping guides.</b> Can't decide Start Here.
            </h2>
            <div className={styles.g}>
               {dataSecond.map(({ name, heading, image, description }) => (
                  <EntertainmentCard
                     name={name}
                     heading={heading}
                     image={image}
                     description={description}
                  />
               ))}
            </div>
         </div>
         <div className={styles.prdGrid}>
            <h2>
               <b>Ways to save.</b> Find what works for you.
            </h2>
            <div className={styles.g}>
               {dateThird.map(({ name, heading, image, description }) => (
                  <TradeCard
                     name={name}
                     heading={heading}
                     image={image}
                     description={description}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
