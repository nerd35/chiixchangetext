import React, { useState } from "react";
import BasicData from "./basicData";
import { AddGigFormSection, AddGigTitle } from "./main.element";
import Remuneration from "./remuneration";



const AddGigs = ({ pages, setPages }) => {
  const [addgigs, setAddGigs] = useState(false)
  return (
    <>
      <div className="py-2" style={{ border: "1px solid #ECECEC" }}>
        <AddGigTitle className="px-5">Gigs</AddGigTitle>
      </div>
      <AddGigFormSection className="px-5 py-3">
        <h1
          style={{
            font: "normal normal normal 25px/35px Circular Std Book",
            letterSpacing: "0px",
            color: "#565D74",
          }}
        >
          New gig
        </h1>
        {addgigs ?  <Remuneration setPages={setPages} addgigs={addgigs} setAddGigs={setAddGigs} pages={pages}/> : <BasicData setAddGigs={setAddGigs} addgigs={addgigs}/>}
        
        
      </AddGigFormSection>
    </>
  );
};

export default AddGigs;
