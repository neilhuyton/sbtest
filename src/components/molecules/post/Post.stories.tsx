import React from "react";
import { storiesOf } from "@storybook/react";

import { Post } from ".";

const props = {
  excerpt: "Hello",
  slug: "/somewhere",
  title: "Cool Stuff",
  renderLink: () => <a href="/">Hello</a>
};

storiesOf("Molecules/Post", module).add("Default", () => <Post {...props} />);
