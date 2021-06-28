import React from "react";

import Seo from "./src/constants/Seo";
export function wrapPageElement({ props, elements }) {
  return <div {...props}>{elements}</div>;
}

export function wrapRootElement({ elements }) {
  return <div>{elements}</div>;
}
