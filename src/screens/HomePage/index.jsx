import React from 'react'
import { MainContent, Sidebar } from '../../components'
import { HomeContainer } from './home.element'

const HomePage = () => {
    
    return (
        <HomeContainer>
                    <Sidebar/>
                    <MainContent/>
        </HomeContainer>
    )
}

export default HomePage
