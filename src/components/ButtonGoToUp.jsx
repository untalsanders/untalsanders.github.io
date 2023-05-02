'use strict'

import styled from 'styled-components'

export const ButtonGoToUp = styled.a`
    border-radius: 50%;
    background-color: #f9af16;
    line-height: 1.5px;
    font-size: 2em;
    padding: .8em;
    color: #222;
    position: fixed;
    bottom: 50px;
    right: 50px;
    opacity: 0;
    transition: all .4s;

    &.active {
        opacity: 1;
    }
`



