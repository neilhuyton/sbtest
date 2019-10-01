import React from "react";
import { storiesOf } from "@storybook/react";

import { Image } from ".";

storiesOf("Atoms/Image", module).add("Default", () => (
  <Image
    src="https://images.unsplash.com/photo-1569524872948-0ba4d096f997"
    alt="River"
  />
));
