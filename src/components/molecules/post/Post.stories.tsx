import React from "react";
import { storiesOf } from "@storybook/react";

import { Post } from ".";

const props = {
  author: "Neil Huyton",
  body:
    "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
  excerpt: "Hello",
  slug: "/somewhere",
  title: "Cool Stuff",
  renderLink: () => <a href="/">Hello</a>
};

storiesOf("Molecules/Post", module).add("Default", () => <Post {...props} />);
