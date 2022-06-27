import React from "react";
import { useState } from "react";
import Myapi from "./myapi";

const Filters = () => {
  const [cat, setCat] = useState("general");
  const [cont, setCont] = useState("in");
  const [clicked, setClicked] = useState(false);

  const clickSwitch = () => {
    setClicked((prevState) => !prevState);
  };

  function click(e) {
    clickSwitch();
    e.target.style.color = "var(--primary)";
    e.target.style.backgroundColor = "var(--neutral)";
  }
  function noClick(e) {
    e.target.style.color = "var(--neutral)";
    e.target.style.backgroundColor = "var(--secondary)";
  
  }

  function retValue(e) {
    setCat(e.target.value);
    if (clicked == true) {
      click(e);
      clickSwitch();

    }
    if (clicked == false) {
      noClick(e);
      clickSwitch();
    }
  }

  function retCont(e) {
    setCont(e.target.value);
    if (clicked == true){
       click(e);
       clickSwitch();
      }
    if (clicked == false){
       noClick(e);
       clickSwitch();
    }
  }

  return (
    <>
      <div className="fWrapper">
        <div className="mp8">FILTERS</div>
        
        <div className="fScroll mpb8">
          <button onClick={retCont} value="in" className="catBtn">
            INDIA
          </button>
          <button onClick={retCont} value="us" className="catBtn">
            USA
          </button>
          <button onClick={retCont} value="au" className="catBtn">
            AUSTRALIA
          </button>
          <button onClick={retCont} value="ru" className="catBtn">
            RUSSIA
          </button>
          <button onClick={retCont} value="fr" className="catBtn">
            FRANCE
          </button>
          <button onClick={retCont} value="gb" className="catBtn">
            UK
          </button>
        </div>
        <div className="fScroll mpb8">
          <button onClick={retValue} value="sports" className="catBtn">
            SPORTS
          </button>
          <button onClick={retValue} value="science" className="catBtn">
            SCIENCE
          </button>
          <button onClick={retValue} value="health" className="catBtn">
            HEALTH
          </button>
          <button onClick={retValue} value="technology" className="catBtn">
            TECHNOLOGY
          </button>
          <button onClick={retValue} value="entertainment" className="catBtn">
            ENTERTAINMENT
          </button>
          <button onClick={retValue} value="business" className="catBtn">
            BUSINESS
          </button>
        </div>
      </div>
      <div className="cardWrapper">
        <Myapi
          category={cat}
          i={Math.floor(Math.random() * 20)}
          country={cont}
        />
        <Myapi
          category={cat}
          i={Math.floor(Math.random() * 20)}
          country={cont}
        />
        <Myapi
          category={cat}
          i={Math.floor(Math.random() * 20)}
          country={cont}
        />
        <Myapi
          category={cat}
          i={Math.floor(Math.random() * 20)}
          country={cont}
        />
        <Myapi
          category={cat}
          i={Math.floor(Math.random() * 20)}
          country={cont}
        />
        <Myapi
          category={cat}
          i={Math.floor(Math.random() * 20)}
          country={cont}
        />
        <Myapi
          category={cat}
          i={Math.floor(Math.random() * 20)}
          country={cont}
        />
        <Myapi
          category={cat}
          i={Math.floor(Math.random() * 20)}
          country={cont}
        />
      </div>
    </>
  );
};

export default Filters;
