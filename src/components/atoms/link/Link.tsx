import React, { ReactNode } from "react";

export type LinkProps = {
  children?: ReactNode;
  className?: string;
  slug: string;
  title?: string;
};

export const Link = ({ children, className, slug, title }: LinkProps) => (
  <a href={slug} className={className}>
    {children ? children : title}
  </a>
);
