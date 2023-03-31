'use strict'

import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { Wrapper } from './Common'
import { useState } from 'react'

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
`

const MobileIcon = styled.div`
    display: flex;
    cursor: pointer;
    padding: 1.2rem;
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
    left: ${({ open }) => (open ? 0 : '-100%')};
    top: 0;
    bottom: 0;
    right: ${({ open }) => (open ? 0 : '100%')};
    text-align: center;
    transition: all 1s ease;
    background-color: #222222f5;

    @media only screen and (min-width: 1024px) {
        position: initial;
        display: flex;
        flex-direction: row;
        background-color: none;
    }
`

const MenuItem = styled.a`
    font-size: 2rem;
    font-weight: bold;
    padding: 1.3rem;

    &:hover {
        background-color: #1118;
        color: #f9af16;
    }

    @media only screen and (min-width: 1024px) {
        font-size: initial;
    }
`

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <NavbarContainer>
            <LogoContainer>
                <Image
                    src="/blog/logotipo.svg"
                    alt="Logotipo sandersgutierrez.github.io"
                    width={35}
                    height={35}
                    priority
                />
                <span>Sanders Gutiérrez</span>
            </LogoContainer>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Menu open={showMobileMenu}>
                <MenuItem href="#" onClick={() => setShowMobileMenu(!showMobileMenu)}>HOME</MenuItem>
                <MenuItem href="#" onClick={() => setShowMobileMenu(!showMobileMenu)}>ABOUT ME</MenuItem>
                <MenuItem href="#" onClick={() => setShowMobileMenu(!showMobileMenu)}>SERVICES</MenuItem>
                <MenuItem href="#" onClick={() => setShowMobileMenu(!showMobileMenu)}>PORTFOLIO</MenuItem>
                <MenuItem href="#" onClick={() => setShowMobileMenu(!showMobileMenu)}>BLOG</MenuItem>
                <MenuItem href="#" onClick={() => setShowMobileMenu(!showMobileMenu)}>CONTACT</MenuItem>
            </Menu>
        </NavbarContainer>
    )
}
