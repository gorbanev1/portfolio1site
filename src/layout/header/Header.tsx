import React from 'react';
import Logo from '../../components/logo/Logo';
import {Container} from "../../components/Container";
import {FlexWrapper} from '../../components/FlexWrapper';
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import { MobileMenu } from './mobilemenu/MobileMenu';
import {S} from './Header_Styles'

export const items = ['Home', 'Skills', 'Works', 'Testimonials', 'Contact',]
export const Header:React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <DesktopMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

export default Header
