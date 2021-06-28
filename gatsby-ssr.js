import React from "react";

export function wrapPageElement({ props, elements }) {
  return <div {...props}>{element}</div>;
}

export function wrapRootElement({ element }) {
  return <div>{element}</div>;
}
