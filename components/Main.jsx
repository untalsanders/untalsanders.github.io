'use strict'

import styled from 'styled-components'

const MainContainer = styled.main`
    grid-row: 2;

    & > * {
        padding-top: 8rem;
    }
`

export function Main(props) {
    return <MainContainer>{props.children}</MainContainer>
}
