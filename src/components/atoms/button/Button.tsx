import React from "react";

export type ButtonProps = {
  className?: string;
  slug: string;
  title: string;
};

export const Button = ({ className, slug, title }: ButtonProps) => (
  <a href={slug} className={className}>
    {title}
  </a>
);
