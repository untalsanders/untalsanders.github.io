'use strict'

import { Navbar } from '@/components'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #111;
    color: #e4e4e4;
    grid-row: 1;
    border-bottom: 1px solid #f9af16;
`

export function Header() {
    return (
        <HeaderContainer>
            <Navbar />
        </HeaderContainer>
    )
}
