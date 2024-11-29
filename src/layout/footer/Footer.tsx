import React from 'react';
import {FlexWrapper} from '../../components/FlexWrapper';
import Icon from "../../components/icon/Icon";
import {S} from "./Footer_Styles";

/*const SocialItemsData = [
    {
        iconId:"instagram"
    },
    {
        iconId:"telegram"
    },
    {
        iconId:"vk"
    },
    {
        iconId:"LinkedIn"
    },

]*/
const SocialItemsData = ["instagram", "telegram", "vk", "LinkedIn"]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Igor</S.Name>
                <S.SocialList>
                    {SocialItemsData.map((i, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={'21'} width={"21"} iconId={i} viewBox={'0 0 21px 21px'}></Icon>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                    {/* <SocialItem>
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
                    </SocialItem>*/}

                </S.SocialList>
                <S.Copyright>© 2024 Igor Gorbanev, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

