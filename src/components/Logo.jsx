'use strict'

import Image from 'next/image'
import styled from 'styled-components'

export default function Logo() {
    return (
        <LogoContainer>
            <Image src="/blog/logotipo.svg" alt="Logotipo sandersgutierrez.github.io" width={45} height={45} priority />
            Sanders Gutiérrez
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: .8rem;
    font-size: 1.125rem;
    font-weight: bold;
`
