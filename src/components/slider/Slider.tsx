import React from 'react';
import styled from "styled-components";
import { theme } from '../../styles/Theme';
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  max-width: 500px;
  text-align: center;
  
`
const Text = styled.p`
  margin-bottom: 5px;

`
export const Name = styled.span`
  display: inline-block;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 22px 0 32px

`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 5px;
    background-color: deeppink;
    border-radius: 20px;
    &+ span{
      margin-left: 5px;
    }
    &.active{
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`
