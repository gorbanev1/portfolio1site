import React from 'react';
import styled, {StyleSheetManager} from 'styled-components';
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <nav>
                <ul>
                    {props.menuItems.map((i, index) => {
                        return <ListItem key={index}>
                            <Link href="">{i}
                                <Mask><span>{i}</span></Mask>
                                <Mask><span>{i}</span></Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </nav>
        </StyledHeaderMenu>
    );
};
const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

const Link = styled.a`
  color: #7572D5;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.accent};
  &+& {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const ListItem = styled.li`
  position: relative;
  &::before{
    content:'';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }
  &:hover{
    &::before{
      transform: scale(1);
    }
    ${Mask}{
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};
      & + ${Mask}{
        transform: skewX(12deg) translateX(-5px);

      }
    }

  }

`