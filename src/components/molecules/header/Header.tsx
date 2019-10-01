import React, { ComponentType } from "react";

import { LinkProps } from "../../atoms/link";
import { Navigation } from "../../molecules/navigation";
import { renderLink } from "../../../utils";

export type HeaderProps = {
  renderLink?: ComponentType<LinkProps>;
  menuLinks: [];
  slug: string;
  title: string;
};

export const Header = ({
  menuLinks,
  renderLink: Link = renderLink,
  ...props
}: HeaderProps) => (
  <header id="header">
    <h1>
      <Link {...props} />
    </h1>
    <Navigation menuLinks={menuLinks} renderLink={Link} />
    <nav className="main">
      <ul>
        <li className="search">
          <a className="fa-search" href="#search">
            Search
          </a>
          <form id="search" method="get" action="#">
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
);
