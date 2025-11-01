import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello word using React"
);
//nested html structure
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id: "child1", key: "h1"}, "I am h1"),
    React.createElement(
      // Sibling
      "h2",
      {id: "child2", key: "h2"},
      "I am h2"
    ),
  ])
);
const root = createRoot(document.getElementById("root"));
root.render(parent);
