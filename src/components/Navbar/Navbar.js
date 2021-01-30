import React from "react";
import { Link } from "react-router-dom";

import cart from './images/cart.svg';
import bag from './images/bag.svg';

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar__logoContainer}>
        <img src={cart} alt="Cart" />
        <h1 className={styles.navbar__logo}>BestShop</h1>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <img
            className={styles.cart__image}
            src={bag}
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>30</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
