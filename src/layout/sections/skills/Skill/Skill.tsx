import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
  width: 380px;
  padding: 42px 20px 52px;
  flex-grow: 1;
  @media ${theme.media.mobile}{
    padding: 62px 0 40px;

  }

`
const SkillTitle = styled.div`
  margin: 70px 0 15px;
  font-family: "Josefin Sans", 'sans-serif';

  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`
const SkillText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`

export const IconWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    // flex-shrink: 0; 
    background: rgba(255, 255, 255, 0.10);

    transform: rotate(45deg) translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;

  }
`
