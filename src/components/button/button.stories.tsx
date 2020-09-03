import React from "react";
import { action } from "@storybook/addon-actions";

import Button, { TypeButton } from "./button";

export default {
  title: "Design/Button",
  component: Button,
};

export const Default = () => (
  <Button type={TypeButton.Default} customClass="test-def" label="Default" onClick={action("click")} />
);

export const Primary = () => (
  <Button type={TypeButton.Primary} customClass="test-prim" label="Primary" onClick={action("click")} />
);

export const Secondary = () => (
  <Button type={TypeButton.Secondary} label="Secondary" onClick={action("click")} />
);
