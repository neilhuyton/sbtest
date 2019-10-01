import React, { ComponentType } from "react";

import { ImageProps } from "../../atoms/image";
import { LinkProps } from "../../atoms/link";

export type IntroProps = {
  author: string;
  body: string;
  date: string;
  excerpt: string;
  image?: any;
  slug: string;
  summary: string;
  title: string;
  renderImage?: ComponentType<ImageProps>;
  renderLink?: ComponentType<LinkProps>;
};

export const Intro = () => (
  <section id="intro">
    <a href="#" className="logo">
      <img src="images/logo.jpg" alt="" />
    </a>
    <header>
      <h2>Neil Huyton</h2>
      <p>Web developer</p>
    </header>
  </section>
);
