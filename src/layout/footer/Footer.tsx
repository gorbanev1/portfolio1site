import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from '../../components/FlexWrapper';
import Icon from "../../components/icon/Icon";

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
                        <Icon height={'21px'} width={"21px"}  viewBox={'0 0 21px 21px'} iconId={"telegram"}></Icon>
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        <Icon height={'21px'} width={"21px"}  viewBox={'0 0 21px 21px'} iconId={"vk"}></Icon>
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

`
const SocialIconLink = styled.a`

`
const StyledFooter = styled.footer`
  background-color: #5d1010;
  min-height: 20vh;
`
const SocialList = styled.ul`
    display: flex;
  align-items:center;
  gap: 20px;

`
const SocialItem = styled.li`

`
const Copyright = styled.small`

`

