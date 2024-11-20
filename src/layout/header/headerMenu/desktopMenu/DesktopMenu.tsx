import React from 'react';
import styled, {css, StyleSheetManager} from 'styled-components';
import { Menu } from '../menu/Menu';
import {s} from '../HeaderMenu_Styles'


export const DesktopMenu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <s.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </s.DesktopMenu>
    );
};




