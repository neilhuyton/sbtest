import React from "react";

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Image = (props: ImageProps) => <img {...props} />;
