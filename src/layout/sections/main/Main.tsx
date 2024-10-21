import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/Myphoto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <div>
            <StyledMain>
                <Container>
                    <FlexWrapper align={"center"} justify={"space-between"}>
                        <div>
                            <SmallText>Hi there</SmallText>
                            <Name>I am Igor Gorbanev</Name>
                            <MainTitle>A Web Developer</MainTitle>
                        </div>
                        <img src="./../../../assets/images/Myphoto.jpg" alt=""/>
                        <Photo src={photo} alt=""/>
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

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
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
`
const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`