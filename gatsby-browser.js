import React from "react";
import Seo from "./src/constants/Seo";
export function wrapPageElement({ props, elements }) {
  var pathname = window.location.pathname
    .toLocaleUpperCase()
    .replace(/\/+$/, "");
  pathname = pathname[0] == "/" ? pathname.substr(1) : pathname;
  var description =
    "Welcome to Tyto Super Admin! A page where only you as the owner has an access.";

  return (
    <div {...props}>
      <Seo title={"TYTO | " + pathname} description={description} />

      {elements}
    </div>
  );
}

export function wrapRootElement({ elements }) {
  return <div>{elements}</div>;
}
