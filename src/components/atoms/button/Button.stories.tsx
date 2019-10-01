import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from ".";

storiesOf("Atoms/Button", module)
  .add("Large", () => (
    <Button slug="/" title="Large" className="button large" />
  ))
  .add("Default", () => <Button slug="/" title="Default" className="button" />)
  .add("Small", () => (
    <Button slug="/" title="Small" className="button small" />
  ));
