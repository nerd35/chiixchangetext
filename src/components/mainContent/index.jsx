import React, { useState } from "react";
// import { Switch, Route} from 'react-router-dom'
import { MainContentContainer } from "./main.element";
import Navbar from "./Navbar";
import Sidenav from "./sidenav";
import GigsHome from "./giigsHome"
import AddGigs from "./addGigs"


const MainContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pages, setPages] = useState(false)
    const toggle =() => {
        setIsOpen(!isOpen)
    }
  return (
    <MainContentContainer>
      <Sidenav isOpen={isOpen} toggle={toggle}/>
        <Navbar  toggle={toggle} />

        { pages ? <AddGigs setPages={setPages} pages={pages}/> : <GigsHome setPages={setPages} pages={pages}/> }
          
          
    </MainContentContainer>
  );
};

export default MainContent;
