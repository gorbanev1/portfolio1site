import React from 'react';
import styled, {StyleSheetManager} from 'styled-components';

export const Menu = () => {
    return (
        <StyledMenu>
        <nav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Works</a>
                </li>
                <li>
                    <a href="">Testimonials</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
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