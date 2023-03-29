'use strict'

import styled from 'styled-components'

const FooterContainer = styled.footer`
    background-color: #222;
    color: #e4e3e3;

    grid-column: span 4;
    grid-row: 3;
`

export default function Footer() {
    return (
        <FooterContainer>
            <div className="container">
                <div>
                    &copy; <a href="http://sandersgutierrez.github.io">Sanders Gutiérrez</a> 2023. Todos los derechos
                    reservados.
                </div>
            </div>
        </FooterContainer>
    )
}
