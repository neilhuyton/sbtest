import React, { ComponentType } from "react";

export type PostProps = {
  author: string;
  body: string;
  slug: string;
  title: string;
  renderLink: ComponentType<PostRenderLinkProps>;
};

export type PostRenderLinkProps = Partial<PostProps>;

const renderLinkDefault = ({ slug, title }: PostRenderLinkProps) => (
  <a href={slug}>{title}</a>
);

export const Post = ({
  author,
  body,
  renderLink: Link = renderLinkDefault,
  slug,
  title
}: PostProps) => {
  const linkProps = { slug, title: "&larr; back to all posts" };
  return (
    <>
      <h1>{title}</h1>
      <p>Posted by {author}</p>
      {body}
      <Link {...linkProps} />
    </>
  );
};
