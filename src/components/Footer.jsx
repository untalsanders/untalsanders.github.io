'use strict'

import styled from 'styled-components'
import { Wrapper } from './Common'

const FooterContainer = styled.footer`
    background-color: #111;
    color: #e4e3e3;
    grid-row: 3;

    div {
        padding: 1.2rem 0;
        text-align: center;

        a{
            color: #f9af16;
            font-weight: bold;
        }
    }
`

export default function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
                &copy; 2023 <a href="http://sandersgutierrez.github.io/blog">Sanders Gutiérrez</a>. All rights reserved. | Made with ❤ in 🇦🇷.
            </Wrapper>
        </FooterContainer>
    )
}
