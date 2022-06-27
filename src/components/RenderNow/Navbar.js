import React from 'react';

export default function Navbar({openSidebar}) {

  return (
    <>
    <div id ="nav" className="nav">
    <div className="logo mp8">FNC</div>
    <div className="logo mp8">FLASH NEWSCARDS</div>
    <button className="btn"  onClick={openSidebar}>
    <svg  id="tIcon" height="40" width="40"><path d="M20 35Q13.75 35 9.375 30.625Q5 26.25 5 20Q5 13.75 9.375 9.375Q13.75 5 20 5Q20.417 5 20.854 5.021Q21.292 5.042 21.875 5.125Q20.292 6.417 19.396 8.354Q18.5 10.292 18.5 12.5Q18.5 16.25 21.125 18.875Q23.75 21.5 27.5 21.5Q29.708 21.5 31.646 20.646Q33.583 19.792 34.875 18.292Q34.958 18.833 34.979 19.229Q35 19.625 35 20Q35 26.25 30.625 30.625Q26.25 35 20 35Z"/></svg>  
    </button> 
    </div>
    </>
  )
}
