'use strict'

import Link from 'next/link'
import { Wrapper } from './Common'
import Image from 'next/image'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const NavbarContainer = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-y: hidden;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
    font-size: 1.125rem;
    font-weight: bold;
    user-select: none;
`

const MobileIcon = styled.div`
    display: flex;
    cursor: pointer;
    padding: 1.4rem 0;
    z-index: 1;

    &:hover {
        color: #f9af16;
        transition: 0.4s all ease;
    }

    svg {
        font-size: 1.5rem;
    }

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: ${({ open }) => (open ? 0 : '-100vh')};
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    text-align: center;
    transition: all 1s ease;
    background-color: ${({ open }) => (open ? '#000000f1' : 'initial')};

    @media only screen and (min-width: 1024px) {
        position: initial;
        display: flex;
        flex-direction: row;
        background-color: initial;
        height: initial;
    }
`

const MenuItem = styled(Link)`
    color: white;
    user-select: none;
    font-size: 2rem;
    font-weight: bold;
    padding: 1.4rem;

    &:hover {
        background-color: #1118;
        color: #f9af16;
    }

    @media only screen and (min-width: 1024px) {
        font-size: initial;
    }
`

export function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <NavbarContainer>
            <LogoContainer>
                <Image src="/logotipo.svg" alt="Logotipo sandersgutierrez.github.io" width={35} height={35} priority />
                <span>Sanders Gutiérrez</span>
            </LogoContainer>
            <MobileIcon onClick={handleClick}>
                {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Menu open={showMobileMenu}>
                <MenuItem href="/" onClick={handleClick}>
                    HOME
                </MenuItem>
                <MenuItem href="/#about" onClick={handleClick}>
                    ABOUT ME
                </MenuItem>
                <MenuItem href="/#services" onClick={handleClick}>
                    SERVICES
                </MenuItem>
                <MenuItem href="/posts" onClick={handleClick}>
                    BLOG
                </MenuItem>
                <MenuItem href="/#contact" onClick={handleClick}>
                    CONTACT
                </MenuItem>
            </Menu>
        </NavbarContainer>
    )
}
