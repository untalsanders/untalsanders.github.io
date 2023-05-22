'use strict'

import { FaArrowUp } from 'react-icons/fa'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const ScrollToUpButtonContainer = styled.button`
    border: 0;
    border-radius: 50%;
    background-color: #f9af16;
    line-height: 1.5px;
    font-size: 1em;
    padding: 0.8em;
    color: #222;
    cursor: pointer;
    position: fixed;
    bottom: 50px;
    right: 50px;
`

export const ScrollToUpButton = () => {
    const [goToUp, setGoToUp] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => (window.scrollY > 100 ? setGoToUp(true) : setGoToUp(false)))
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (goToUp &&
        <ScrollToUpButtonContainer onClick={handleClick}>
            <FaArrowUp />
        </ScrollToUpButtonContainer>
    )
}
