import React from "react";
import { storiesOf } from "@storybook/react";

import { Link } from ".";

storiesOf("Atoms/Link", module).add("Default", () => (
  <Link slug="/" title="Click me!" />
));
