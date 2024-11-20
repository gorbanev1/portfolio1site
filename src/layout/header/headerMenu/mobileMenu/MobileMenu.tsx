import React, {useState} from 'react';
import styled, {css, StyleSheetManager} from 'styled-components';
import {Menu} from "../menu/Menu";
import {s} from './../HeaderMenu_Styles'


export const MobileMenu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick= ()=>{ setMenuIsOpen(!menuIsOpen)}
    return (
        <s.MobileMenu>
            <s.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </s.BurgerButton>
            <s.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
            <nav>
                <Menu menuItems={props.menuItems}/>
            </nav>
            </s.MobileMenuPopup>
        </s.MobileMenu>
    );
};

