import { configure } from "@storybook/react";
// import "../src/components/styles/main.css";

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx$/), module);
c;
