import React from 'react';
import {S} from "./Main_Styles";
import photo from "../../../assets/images/Myphoto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main:React.FC = () => {
    return (
        <div>
            <S.Main id={"home"}>
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
                        <Tilt
                            className="parallax-effect-img"
                            tiltMaxAngleX={40}
                            tiltMaxAngleY={40}
                            perspective={800}
                            transitionSpeed={1500}
                            scale={1.1}
                            gyroscope={true}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                        </Tilt>
                    </FlexWrapper>
                </Container>
            </S.Main>
        </div>


    );
};
