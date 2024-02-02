import React from "react";
import styles from "./footer.module.scss";

const links = [
   "Privacy policy",
   "Term of use",
   "Sales and Refunds",
   "Legal",
   "Site Map",
];
export default function Footer() {
   return (
      <div className={styles.container}>
         <div>
            <span>
               More to shop: <a>Find a Apple Store</a> or <a>other retailer</a>{" "}
               near your Or Call 1-800-MY-APPLE
            </span>
         </div>
         <hr />
         <div>
            <span>Copyright &copy; 2024 Apple Inc. All rights reserved</span>
            <div className={styles.link}>
               {links.map((name) => (
                  <button>{name}</button>
               ))}
            </div>
            <span>United States</span>
         </div>
      </div>
   );
}
