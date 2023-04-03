'use strict'

import styled from 'styled-components'
import Navbar from './Navbar'

const HeaderContainer = styled.header`
    background-color: #111;
    color: #e4e4e4;
    grid-row: 1;
    border-bottom: 1px solid #f9af16;
`

export default function Header() {
    return (
        <HeaderContainer>
            <Navbar />
        </HeaderContainer>
    )
}
