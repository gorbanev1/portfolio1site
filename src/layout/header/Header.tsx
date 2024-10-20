import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import Menu from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import { FlexWrapper } from '../../components/FlexWrapper';

export const items = ['Home','Skills','Works','Testimonials','Contact',]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
            <Logo/>
            <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

export default Header
const StyledHeader = styled.header`
  background-color: #9b6767;

`;