import React from "react";

import UL from "./ul";

export default {
  title: "Design/Unordered List",
  component: UL,
};

const items = ["grapes", "lime", "cherry", "blueberry", "banana", "apple"];

export const Default = () => <UL items={items} customClass="unordered-list" />;
