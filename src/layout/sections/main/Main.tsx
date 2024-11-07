import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/Myphoto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { theme } from '../../../styles/Theme';

export const Main = () => {
    return (
        <div>
            <StyledMain>
                <Container>
                    <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                        <div>
                            <SmallText>Hi there</SmallText>
                            <Name>I am <span> Igor Gorbanev</span></Name>
                            <MainTitle>A Web Developer</MainTitle>
                        </div>
                       <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                       </PhotoWrapper>
                    </FlexWrapper>
                </Container>
            </StyledMain>
        </div>


    );
};
const StyledMain = styled.section`
  min-height: 100vh;
  background-color: rgba(220, 20, 60, 0.42);
  display: flex;
`

const PhotoWrapper= styled.div`
  position: relative;
  z-index: 0;
  &::before{
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  
  @media ${}
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const Name = styled.h2`
  color: #FFF;
  font-family: "Josefin Sans", sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;
  span{
    z-index: 1;
    position: relative;
    &::before{
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`
const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`