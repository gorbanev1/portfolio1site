import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`color: #FFF;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  z-index: 0;
  width: 170px;
  height: 32px;
  
  &:hover{
    &::before{
      height: 100%;
      width: 1000%;
    }
    
    
  };
  
  &::before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
    

`