import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


const Skills = styled.section`
position: relative;
`

const Skill = styled.div`
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

const IconWrapper = styled.div`
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
export const S = {
    Skills,
    Skill,
    SkillTitle,
    SkillText,
    IconWrapper


}