'use strict'

const { default: styled } = require('styled-components')

export const Wrapper = styled.div`
    max-width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 75em) {
        max-width: 80%;
    }
`
