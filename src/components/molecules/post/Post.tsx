import React, { ComponentType, ReactNode } from "react";

import { LinkProps } from "../../atoms/link";
import { ImageProps } from "../../atoms/image";
import { renderImage, renderLink } from "../../../utils";

export type PostProps = {
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

export type PostRenderLinkProps = Partial<PostProps> & {
  children?: ReactNode;
  className?: string;
};

export const Post = ({
  author,
  body,
  excerpt,
  date,
  image,
  renderImage: Image = renderImage,
  renderLink: Link = renderLink,
  slug,
  summary,
  title,
  ...props
}: PostProps) => (
  <div id="main">
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <Link slug={slug} title={title} />
          </h2>
          <p>{summary}</p>
        </div>
        <div className="meta">
          <time className="published" dateTime={date}>
            {date}
          </time>
          <Link slug={`/author/${author}`}>
            <span className="name">{author}</span>
            <img src="images/avatar.jpg" alt="" />
          </Link>
        </div>
      </header>
      <span className="image featured">
        <Image {...image} />
      </span>
      {body}
      <footer>
        <ul className="stats">
          <li>
            <a href="/sample.html">General</a>
          </li>
          <li>
            <a href="/sample.html" className="icon solid fa-heart">
              28
            </a>
          </li>
          <li>
            <a href="/sample.html" className="icon solid fa-comment">
              128
            </a>
          </li>
        </ul>
      </footer>
    </article>
  </div>
);
