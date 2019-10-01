import React from "react";

import { Intro } from "../intro";
import { MiniPosts } from "../mini-post";
import { PostProps } from "../post";

export type PostPreviewProps = {
  posts: PostProps[];
};

export const Sidebar = ({ posts }: PostPreviewProps) => (
  <section id="sidebar">
    <Intro />
    <MiniPosts posts={posts} />
  </section>
);
