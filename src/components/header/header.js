import React from "react";
import styles from "./header.module.scss";
import { TbChevronRight } from "react-icons/tb";

const links = [
   "All Model",
   "Shopping Guides",
   "Ways to Save",
   "The Apple Store",
   "Accessories",
   "Setup and Support",
   "The iPad Experience",
   "Special Stores",
];

export default function Header() {
   return (
      <div className={styles.container}>
         <div className={styles.mainContainer}>
            <div className={styles.containerOne}>
               <h2>Shop iPad</h2>
            </div>
            <div className={styles.containerTwo}>
               <div>
                  <h2>Need Shooping Help?</h2>
                  <span>Ask an iPad Specialist</span>
               </div>
               <div>
                  <h2>Visit an Apple Store</h2>
                  <div className={styles.aa}>
                     <span>Find one near you</span>
                     <TbChevronRight />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.link}>
            {links.map((name) => (
               <span>{name}</span>
            ))}
            <button>
               <TbChevronRight />
            </button>
         </div>
      </div>
   );
}
