import React from "react";
import { storiesOf } from "@storybook/react";

import { Sidebar } from ".";
import { miniPosts } from "./__mocks__/Sidebar.mock";

storiesOf("Molecules/Sidebar", module).add("Default", () => (
  <Sidebar miniPosts={miniPosts} />
));
