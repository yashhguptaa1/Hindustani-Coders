import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

const Sidebar=(props)=> {
    return (
        <SidebarStyled>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
`;

export default Sidebar;