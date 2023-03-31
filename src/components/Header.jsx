'use strict'

import styled from 'styled-components'
import Navbar from './Navbar'

const HeaderContainer = styled.header`
    background-color: #000000e4;
    color: #e4e4e4;
    grid-row: 1;
`

export default function Header() {
    return (
        <HeaderContainer>
            <Navbar />
        </HeaderContainer>
    )
}
