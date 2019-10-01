import React from "react";

import { PostProps } from "../post";
import { renderImage, renderLink } from "../../../utils";

export const PostPreview = ({
  author,
  date,
  excerpt,
  image,
  renderLink: Link = renderLink,
  renderImage: Img = renderImage,
  summary,
  ...props
}: PostProps) => (
  <article className="post">
    <header>
      <div className="title">
        <h2>
          <Link {...props} />
        </h2>
        <p>{summary}</p>
      </div>
      <div className="meta">
        <time className="published" dateTime={date}>
          {date}
        </time>
        <a href="#" className="author">
          <span className="name">{author}</span>
          <img src="images/avatar.jpg" alt="" />
        </a>
      </div>
    </header>
    <Link {...props} className="image featured">
      <Img {...image} />
    </Link>
    <p>{excerpt}</p>
    <footer>
      <ul className="actions">
        <li>
          <Link {...props} title="Continue Reading" className="button large" />
        </li>
      </ul>
      <ul className="stats">
        <li>
          <a href="/sample.html">General</a>
        </li>
        <li>
          {/* <a href="#" className="icon solid fa-heart">
            28
          </a> */}
        </li>
        <li>
          {/* <a href="#" className="icon solid fa-comment">
            128
          </a> */}
        </li>
      </ul>
    </footer>
  </article>
);
