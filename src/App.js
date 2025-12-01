import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";

// React Element

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello word using React"
// );
// //nested html structure
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {id: "child1", key: "h1"}, "I am h1"),
//     React.createElement(
//       // Sibling
//       "h2",
//       {id: "child2", key: "h2"},
//       "I am h2"
//     ),
//   ])
// );
// const root = createRoot(document.getElementById("root"));
// root.render(parent);


// JSX

// const jsxHeading = <h1 className ="heading">
// Namaste React using JSX
// </h1>;
// const root = createRoot(document.getElementById("root"));
// root.render(jsxHeading)

//React element
// const title =  <h1 className="title">{head}Namaste React Title</h1>
// const head =  <h1 className="head">Namaste React head</h1>
// // Functional component
// const number =10000;
// const HeadingComponent =() => {
//   return (<div id="container">
//    <Title/>
//    <Title></Title>
//    {Title()}
//    <h1>{title}</h1>
//     <h1 className ="heading">Namaste React using Functional component</h1>;
//   </div>)
// };

// const Title = () => {
//  return <h1 className="head">Namaste React Title</h1>
// }


// // we can write using normal functions as well 
// const Title1 = function(){
//  return <h1 className="head">Namaste React Title</h1>
// }

const styleCard = {
  backgroundColor: "red"
}

const AppLayout = () =>{
  return(
    <div className ="app">
<Header/>
{console.log(<Body/>,"--------------------------------")}
<Body/>
    </div>
  )
}
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>)