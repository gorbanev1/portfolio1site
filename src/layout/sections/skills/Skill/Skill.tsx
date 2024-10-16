import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType={
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle >{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};
const SkillTitle = styled.div`

`
const SkillText = styled.p`
`
const StyledSkill = styled.p`
  width: 30%;
  background-color: #a85454;
  margin: 10px;
`

