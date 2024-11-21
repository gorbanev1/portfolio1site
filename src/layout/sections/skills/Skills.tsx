import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from '../../../components/SectionTitle';
import {Skill} from "./Skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skill/Skills_Styles'

const skillData= [
    {
        iconId: "codeSvg",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "css",
        title: "css3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "react",
        title: "react",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "typescriptSvg",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "styledComponents",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "webDesign",
        title: "WEB DESIgN",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }
]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                {skillData.map((i, index)=>{
                    return <Skill iconId={i.iconId}
                                  title={i.title}
                                  description={i.description}
                                  key={index}
                    />
                })}
              {/*  <Skill iconId={"codeSvg"}
                       title={"html5"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}></Skill>
                <Skill iconId={"css"}
                       title={"css3"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}></Skill>
                <Skill iconId={"react"}
                       title={"react"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}></Skill>
                <Skill iconId={"typescriptSvg"}
                       title={"typescript"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}></Skill>
                <Skill iconId={"styledComponents"}
                       title={"styled components"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}></Skill>
                <Skill iconId={"webDesign"}
                       title={"WEB DESIgN"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}></Skill>
*/}
            </FlexWrapper>
            </Container>
        </S.Skills>

    );
};

