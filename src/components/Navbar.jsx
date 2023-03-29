'use strict'

import styled from 'styled-components'

export default function Navbar() {
    return (
        <NavbarContainer>
            <Menu>
                <MenuItem>
                    <MenuItemLink>HOME</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>ABOUT ME</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>SERVICES</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>PORTFOLIO</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>BLOG</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>CONTACT</MenuItemLink>
                </MenuItem>
            </Menu>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.nav``

const Menu = styled.ul`
    display: flex;
    align-items: center;
    font-weight: bold;
`

const MenuItem = styled.li`
    height: 100%;
`

const MenuItemLink = styled.a`
    &:hover {
        background-color: #1117;
        color: #f9af16;
        transition: 0.8s all ease;
    }
`
