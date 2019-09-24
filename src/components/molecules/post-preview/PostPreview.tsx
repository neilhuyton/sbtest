import React, { ComponentType } from "react";

export type PostPreviewProps = {
  excerpt: string;
  slug: string;
  title: string;
  renderLink: ComponentType<PostPreviewRenderLinkProps>;
};

export type PostPreviewRenderLinkProps = Partial<PostPreviewProps>;

const renderLinkDefault = ({ slug, title }: PostPreviewRenderLinkProps) => (
  <a href={slug}>{title}</a>
);

export const PostPreview = ({
  excerpt,
  renderLink: Link = renderLinkDefault,
  ...props
}: PostPreviewProps) => (
  <article>
    <h2>
      <Link {...props} />
    </h2>
    <p>{excerpt}</p>
    <Link {...props} title="read this post &rarr;" />
  </article>
);
