import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {S} from '../skills/Skill/Skills_Styles';
import {Container} from "../../../components/Container";


export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={"quote"}/>
                </S.IconWrapper>
                <Slider/>
            </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: rgba(48, 176, 153, 0.61);
  ${S.IconWrapper}{
    margin: 28px 0 72px;
  }
`