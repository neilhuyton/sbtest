import React, { ComponentType } from "react";

import { LinkProps } from "../../atoms/link";
import { renderLink } from "../../../utils";

export type NavigationItemProps = {
  name: string;
  link: string;
};

export type NavigationProps = {
  menuLinks: NavigationItemProps[];
  renderLink?: ComponentType<LinkProps>;
};

export const Navigation = ({
  renderLink: Link = renderLink,
  menuLinks
}: NavigationProps) => (
  <nav className="links">
    <ul>
      {menuLinks.map(menuLink => (
        <li>
          <Link slug={menuLink.link} title={menuLink.name} />
        </li>
      ))}
    </ul>
  </nav>
);
