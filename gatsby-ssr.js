import React from "react";

import Seo from "./src/constants/Seo";
export function wrapPageElement({ props, element }) {
  return <div {...props}>{element}</div>;
}

export function wrapRootElement({ element }) {
  return <div>{element}</div>;

}
