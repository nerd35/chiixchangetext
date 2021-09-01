import React from 'react'
import { NewGig, Title, TopTiTleColumn, TopTitleSection } from './main.element'

const TopTiltle = ({setPages, pages}) => {
    return (
        <TopTitleSection className="px-4 py-3">
            <TopTiTleColumn>
               <Title>Gigs</Title>
            </TopTiTleColumn>
            <TopTiTleColumn>
                <NewGig onClick={() => setPages(!pages)} className="px-4 py-2">
                    New gig <i class="fas fa-plus"></i>
                </NewGig>
            </TopTiTleColumn>
        </TopTitleSection>
    )
}

export default TopTiltle
