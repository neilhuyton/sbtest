import React from "react";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.firstLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Blog
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
