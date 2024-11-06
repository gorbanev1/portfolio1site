import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import {Container} from "../../components/Container";
import {FlexWrapper} from '../../components/FlexWrapper';
import {HeaderMenu} from "./headermenu/HeaderMenu";
import { MobileMenu } from './mobilemenu/MobileMenu';

export const items = ['Home', 'Skills', 'Works', 'Testimonials', 'Contact',]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>

                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

export default Header
const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.90);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

`;