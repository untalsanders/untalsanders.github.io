'use strict'

import { Navbar } from '@/components'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #111;
    border-bottom: 1px solid #f9af16;
    color: #e4e4e4;
    grid-row: 1;
    position: fixed;
    width: 100vw;
`

export function Header() {
    return (
        <HeaderContainer>
            <Navbar />
        </HeaderContainer>
    )
}
