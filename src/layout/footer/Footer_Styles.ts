import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const Name = styled.span`
  ${font({family:'"Josefin Sans", sans-serif',weight: 700, Fmax: 22, Fmin: 16})}
/*  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  font-weight: 700;*/
  letter-spacing: 3px;
  @media ${theme.media.mobile}{
    
  }

`

const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.accent};
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
  
`


const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;

`
const SocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0;

`
const SocialItem = styled.li`

`
const Copyright = styled.small`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`
export const S ={
  Footer,
  SocialList,
  SocialItem,
  Copyright,
  Name,
  SocialLink
}