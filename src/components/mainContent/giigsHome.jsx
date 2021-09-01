import React from 'react'
import TopTab from "./topTab";
import TopTiltle from "./topTiltle";
import GigsCategory from "./gigsCategory"
import GigsTable from './gigsTable'

const GigsHome = ({setPages, pages}) => {
    return (
        <>
           <TopTiltle setPages={setPages} pages={pages}/>
        <TopTab/>
        <GigsCategory/>
        <GigsTable/> 
        </>
    )
}

export default GigsHome
