import React from 'react';
import {S} from "./Main_Styles";
import photo from "../../../assets/images/Myphoto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import Typewriter from 'typewriter-effect';

export const Main:React.FC = () => {
    return (
        <div>
            <S.Main>
                <Container>
                    <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                        <div>
                            <S.SmallText>Hi there</S.SmallText>
                            <S.Name>I am <span> Igor Gorbanev</span></S.Name>
                           {/* <S.MainTitle>A Web Developer</S.MainTitle>*/}
                            <p>A Web Developer.</p>
                            <S.MainTitle>
                                <Typewriter
                                    options={{
                                        strings: ['A Web Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </S.MainTitle>
                        </div>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </FlexWrapper>
                </Container>
            </S.Main>
        </div>


    );
};
