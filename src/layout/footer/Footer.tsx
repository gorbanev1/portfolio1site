import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../components/FlexWrapper';
import Icon from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Igor</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={"21px"} iconId={"instagram"} viewBox={'0 0 21px 21px'}></Icon>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={"21px"} viewBox={'0 0 21px 21px'} iconId={"telegram"}></Icon>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={"21px"} viewBox={'0 0 21px 21px'} iconId={"vk"}></Icon>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={"21px"} viewBox={'0 0 21px 21px'} iconId={"LinkedIn"}></Icon>
                        </SocialIconLink>
                    </SocialItem>

                </SocialList>
                <Copyright>© 2024 Igor Gorbanev, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};
const Name = styled.span`
  ${font({family:'"Josefin Sans", sans-serif',weight: 700, Fmax: 22, Fmin: 16})}
/*  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  font-weight: 700;*/
  letter-spacing: 3px;
  @media ${theme.media.mobile}{
    
  }

`

const SocialIconLink = styled.a`
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


const StyledFooter = styled.footer`
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

