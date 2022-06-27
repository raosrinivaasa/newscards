import "./App.css";
import { useState } from "react";
import Navbar from "./components/RenderNow/Navbar";
import Footer from "./components/RenderNow/footer";
import Filters from "./components/filters";

function App() {
  const body = document.querySelector("body")
  const tIcon = document.getElementById("tIcon")
  const nav = document.getElementById("nav")

  var [click, setClick] = useState(false);
  const toggleClick = () => {
    setClick((prevState) => !prevState)
    if (click === true) {
      body.style.backgroundColor = "rgb(44, 44, 44)"
      body.style.color = "#fff"
      tIcon.style.fill = "var(--primary)"
      nav.style.backgroundColor = "rgb(44, 44, 44)"
    } 
      if (click === false) {
      body.style.backgroundColor = "#fff"
      body.style.color = "#000"
      tIcon.style.fill = "#000"
  };
}

  return (
    <>
      <Navbar openSidebar={toggleClick}/>
      <Filters/>
      <Footer />
    </>
  );
}


export default App;
