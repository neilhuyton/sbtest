import React from "react";
import { storiesOf } from "@storybook/react";

import { MiniPosts } from ".";
import { posts } from "../post/__mocks__/Post.mock";

storiesOf("Molecules/MiniPost", module).add("Default", () => (
  <MiniPosts posts={posts} />
));
