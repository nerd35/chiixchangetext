import React from 'react'
import { TopTabActiveBgSpan, TopTabActiveLink, TopTabActiveSpan, TopTabBgSpan, TopTabLink, TopTabRow, TopTabSection, TopTabSpan  } from './main.element'

const TopTab = () => {
    return (
        <TopTabSection className="">
            <TopTabRow className="px-4" >
                <TopTabActiveLink className="py-3 pe-5">
                    <TopTabActiveSpan className="ps-2">All gigs</TopTabActiveSpan>
                    <TopTabActiveBgSpan className="px-2 py-1">3404</TopTabActiveBgSpan>
                </TopTabActiveLink>
                <TopTabLink className="py-3 pe-5">
                    <TopTabSpan>My gigs</TopTabSpan>
                    <TopTabBgSpan className="px-2 py-1 " style={{marginLeft: "-40px"}}>1200</TopTabBgSpan>
                </TopTabLink>
                <TopTabLink className="py-3 pe-5">
                    <TopTabSpan>Rejected gigs</TopTabSpan>
                    <TopTabBgSpan className="px-2 py-1">100</TopTabBgSpan>
                </TopTabLink>
            </TopTabRow>
        </TopTabSection>
    )
}

export default TopTab
