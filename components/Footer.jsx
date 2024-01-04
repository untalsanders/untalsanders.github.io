'use strict'

import { Wrapper } from './Common.jsx'
import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    background-color: #111;
    color: #e4e3e3;
    grid-row: 3;
`

const FooterWrapper = styled(Wrapper)`
    padding: 1.2rem 0;
    text-align: center;

    a {
        color: #f9af16;
        font-weight: bold;
    }

    svg {
        &:nth-of-type(1) {
            color: red;
        }
    }
`

export function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                &copy; 2023 <a href="http://sandersgutierrez.github.io/">Sanders Gutiérrez</a>. All rights reserved. |
                Made with <FaHeart /> in 🇦🇷.
            </FooterWrapper>
        </FooterContainer>
    )
}
