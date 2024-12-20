import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.heading}>
      <h1>LOGO</h1>
      <div className={styles.header}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/aboutus">
            <li>About us</li>
          </Link>
          <Link to="/service">
            <li>Services</li>
          </Link>
          <Link to="/news">
            <li>News</li>
          </Link>
        </ul>
        <button>Contact us</button>
      </div>
    </div>
  );
};

export default Header;