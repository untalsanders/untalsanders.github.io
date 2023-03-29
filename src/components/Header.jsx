'use strict'

import styled from 'styled-components'
import { Wrapper } from './Common'
import Logo from './Logo'

export default function Header() {
    return (
        <HeaderContainer>
            <Wrapper>
                <Logo />
            </Wrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: #222;
    color: #e4e4e4;
`
