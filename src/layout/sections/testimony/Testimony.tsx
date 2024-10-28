import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {IconWrapper} from '../skills/Skill/Skill';


export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={"center"}>
                <IconWrapper>
                    <Icon iconId={"quote"}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: rgba(48, 176, 153, 0.61);
  ${IconWrapper}{
    margin: 40px 0 72px;
  }
`