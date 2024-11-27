import React, {useState} from 'react';
import styled, {css, StyleSheetManager} from 'styled-components';
import {Menu} from "../menu/Menu";
import {S} from './../HeaderMenu_Styles'


export const MobileMenu:React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick= ()=>{ setMenuIsOpen(!menuIsOpen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
            <nav>
                <Menu />
            </nav>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

