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
    React.createElement("h1", {}, "I am h1"),
    React.createElement(
      // Sibling
      "h2",
      {},
      "I am h2"
    ),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
