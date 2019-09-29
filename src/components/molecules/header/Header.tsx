import React from "react";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      <a className={styles.headingLink} href="index.html">
        Neil Huyton
      </a>
    </h1>
    <nav className={styles.links}>
      <ul className={styles.list}>
        <li className={styles.linksListItem}>
          <a className={styles.linksListItemLink} href="#">
            Lorem
          </a>
        </li>
        <li className={styles.linksListItem}>
          <a className={styles.linksListItemLink} href="#">
            Ipsum
          </a>
        </li>
        <li className={styles.linksListItem}>
          <a className={styles.linksListItemLink} href="#">
            Feugiat
          </a>
        </li>
        <li className={styles.linksListItem}>
          <a className={styles.linksListItemLink} href="#">
            Tempus
          </a>
        </li>
        <li className={styles.linksListItem}>
          <a className={styles.linksListItemLink} href="#">
            Adipiscing
          </a>
        </li>
      </ul>
    </nav>
    <nav className={styles.main}>
      <ul className={styles.mainList}>
        <li>
          <a className="fa-search" href="#search">
            Search
          </a>
          <form id="search" method="get" action="#" className={styles.search}>
            <input type="text" name="query" placeholder="Search" />
          </form>
        </li>
        <li className="menu">
          <a className="fa-bars" href="#menu">
            Menu
          </a>
        </li>
      </ul>
    </nav>
  </header>
  // <header className={styles.header}>
  //   <nav className={styles.menu}>
  //     <ul className={styles.list}>
  //       <li>
  //         <a href="#" className={styles.firstLink}>
  //           Home
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" className={styles.link}>
  //           Blog
  //         </a>
  //       </li>
  //     </ul>
  //   </nav>
  // </header>
);
