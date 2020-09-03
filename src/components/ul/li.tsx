import React from "react";

type Props = {
  txt: string;
};

const LI = ({ txt }: Props) => (
  <li className="ul__li">
    <li className="ul__txt">{txt}</li>
  </li>
);

LI.defaultProps = {
  txt: "",
};

export default LI;
