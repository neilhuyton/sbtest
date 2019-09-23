import React from "react";
import styles from "./Footer.module.css";

// export type ListProps = {
//   cssClass?: string;
//   title: string;
//   items: ListItemProps[];
// };

export const Footer = () => (
  <footer className={styles.footer}>
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
  </footer>
);
