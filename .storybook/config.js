import { configure } from "@storybook/react";
// import "../src/components/styles/main.css";

// automatically import all files ending in *.stories.js

import "../src/sass/main.scss";

configure(require.context("../src", true, /\.stories\.tsx$/), module);
