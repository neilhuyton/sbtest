import React from "react";

import { PostProps } from "../post";
import { renderImage, renderLink } from "../../../utils";

export type MiniPostProps = {
  posts: PostProps[];
};

export const MiniPost = ({
  author,
  body,
  date,
  image,
  renderLink: Link = renderLink,
  renderImage: Img = renderImage,
  ...props
}: PostProps) => (
  <article className="mini-post">
    <header>
      <h3>
        <Link {...props} />
      </h3>
      <time className="published" dateTime={date}>
        {date}
      </time>
      <a href="#" className="author">
        <img src="images/avatar.jpg" alt="" />
      </a>
    </header>
    <Link {...props} className="image">
      <Img {...image} />
    </Link>
  </article>
);

export const MiniPosts = ({ posts }: MiniPostProps) => (
  <section>
    <div className="mini-posts">
      {posts.map(item => (
        <MiniPost {...item} />
      ))}
    </div>
  </section>
);
