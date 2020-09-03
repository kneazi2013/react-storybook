import React from "react";
import cn from "classnames";
import LI from "./li";

type Props = {
  items: string[];
  customClass?: string;
};

const UL = (props: Props) => {
  const { items, customClass } = props;

  if (items.length === 0) return null;

  return (
    <ul className={cn("ul", { customClass })}>
      {items.map((txt) => (
        <LI txt={txt} />
      ))}
    </ul>
  );
};

UL.defaultProps = {
  items: [],
};

export default UL;
