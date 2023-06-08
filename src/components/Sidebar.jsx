'use strict'

import styled from 'styled-components'

const SidebarContainer = styled.aside``

export function Sidebar({ children }) {
    return <SidebarContainer>{children}</SidebarContainer>
}
