import React from "react";
import { storiesOf } from "@storybook/react";

import { PostPreview } from ".";

const props = {
  excerpt: "Hello",
  slug: "/somewhere",
  title: "Cool Stuff",
  renderLink: () => <a href="/">Hello</a>
};

storiesOf("Molecules/PostPreview", module).add("Default", () => (
  <PostPreview {...props} />
));
