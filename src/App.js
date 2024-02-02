import React from "react";
import styles from "./app.module.scss";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import ProductOne from "./components/products/sectionOne/product";
import Footer from "./components/footer/footer";
export default function App() {
   return (
      <div className={styles.container}>
         <Navbar />
         <Header />
         <ProductOne />
         <Footer />
      </div>
   );
}
