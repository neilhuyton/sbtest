import React from "react";
import { storiesOf } from "@storybook/react";

import { PostPreview } from ".";

const props = {
  excerpt: "This is the excerpt",
  slug: "/somewhere",
  title: "This is the title",
  renderLink: () => <a href="/post">Hello</a>
};

storiesOf("Molecules/PostPreview", module).add("Default", () => (
  <PostPreview {...props} />
));
