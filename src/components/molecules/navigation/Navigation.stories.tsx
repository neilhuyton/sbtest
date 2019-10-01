import React from "react";
import { storiesOf } from "@storybook/react";

import { Navigation } from ".";
import { menuLinks } from "./__mocks__/Navigation.mock";
import { renderLink } from "../../../utils";

storiesOf("Molecules/Navigation", module).add("Default", () => (
  <Navigation menuLinks={menuLinks} renderLink={renderLink} />
));
