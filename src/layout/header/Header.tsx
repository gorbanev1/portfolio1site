import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import Menu from "../../components/menu/Menu";

export const items = ['Home','Skills','Works','Testimonials','Contact',]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

export default Header
const StyledHeader = styled.header`
  background-color: #9b6767;
  display: flex;
  justify-content: space-between;
`;