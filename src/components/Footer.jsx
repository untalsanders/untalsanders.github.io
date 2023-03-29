'use strict'

import styled from 'styled-components'
import { Wrapper } from './Common'

const FooterContainer = styled.footer`
    background-color: #222;
    color: #e4e3e3;
    grid-row: 3;

    div {
        padding: 1.2rem 0;
        text-align: center;
    }
`

export default function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
                &copy; <a href="http://sandersgutierrez.github.io/blog">Sanders Gutiérrez</a> 2023. All rights reserved. Made with ❤ in 🇦🇷.
            </Wrapper>
        </FooterContainer>
    )
}
