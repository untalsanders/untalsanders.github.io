'use strict'

import styled from 'styled-components'
import Navbar from './Navbar'

const HeaderContainer = styled.header`
    background-color: transparent;
    color: #e4e4e4;
    grid-row: 1;
    position: absolute;
    top: 0;
    width: 100vw;
`

export default function Header() {
    return (
        <HeaderContainer>
            <Navbar />
        </HeaderContainer>
    )
}
