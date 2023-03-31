'use strict'

import styled from 'styled-components'
import About from './About'
import Landing from './Landing'

const MainContainer = styled.main`
    grid-row: 2;
`

export default function Main() {
    return (
        <MainContainer>
            <Landing />
            <About />
        </MainContainer>
    )
}
