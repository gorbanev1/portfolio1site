import React from 'react';
import styled, {StyleSheetManager} from 'styled-components';


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
        <nav>
            <ul>
                {props.menuItems.map((i, index)=>{
                    return <li key={index}>
                    <a href="">{i}</a>
                </li>})}
            </ul>
        </nav>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    ul{
      display: flex;
      gap: 30px;
    }
`

export default Menu;