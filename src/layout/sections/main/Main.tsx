import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/Myphoto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <div>
            <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi there</span>
                    <Name>I am Igor Gorbanev</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <img src="./../../../assets/images/Myphoto.jpg" alt=""/>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
            </StyledMain>
        </div>


    );
};
const StyledMain = styled.div`
  min-height: 100vh;
  background-color: rgba(220, 20, 60, 0.42);
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1
`
`

const Name = styled.h2
`
`