'use strict'

import styled from 'styled-components'
import Navbar from './Navbar'

export default function Header() {
    return (
        <HeaderContainer>
            <Navbar />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: #222;
    color: #e4e4e4;
`
