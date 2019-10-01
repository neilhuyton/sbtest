import React from "react";

import { Image, ImageProps } from "./components/atoms/image";
import { Link, LinkProps } from "./components/atoms/link";

export const renderLink = (props: LinkProps) => {
  return <Link {...props} />;
};

export const renderImage = (props: ImageProps) => <Image {...props} />;
