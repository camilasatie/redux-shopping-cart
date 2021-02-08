import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

import logo from './images/cart.svg';
import bag from './images/bag.svg';

import styles from "./Navbar.module.css";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar__logoContainer}>
        <img src={logo} alt="Cart" />
        <h1 className={styles.navbar__logo}>BestShop</h1>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <img
            className={styles.cart__image}
            src={bag}
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
