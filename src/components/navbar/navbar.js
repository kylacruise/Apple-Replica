import React from "react";
import styles from "./navbar.module.scss";

import { TbSearch, TbShoppingBag, TbBrandApple } from "react-icons/tb";
const list = [
   "Store",
   "Mac",
   "Ipad",
   "iPhone",
   "Watch",
   "AirPods",
   "TV & Home",
   "Entertainment",
   "Accessories",
   "Support",
];

export default function Navbar() {
   return (
      <div className={styles.container}>
         <div className={styles.logo}>
            <TbBrandApple size={18} />
         </div>
         {list.map((name) => (
            <span key={name}>{name}</span>
         ))}
         <div className={styles.icons}>
            <TbSearch size={18} />
            <TbShoppingBag size={18} />
         </div>
      </div>
   );
}
