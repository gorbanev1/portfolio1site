import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/Portfolio1.png'
import timerImg from '../../../assets/images/Portfolio2.png'
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

const WorksItems = ['All','Landing Page','React','Spa']
const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]
export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={WorksItems}/>
            <FlexWrapper justify={'space-around'} align={"flex-start"} wrap={"wrap"}>
                {workData.map((i, index)=>
                     <Work title={i.title}
                                 text={i.text}
                                 src={i.src}/>
                )}
               {/* <Work title={"Social Network"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>

                <Work title={"Timer"}
                      src={timerImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
           */}
            </FlexWrapper>
            </Container>
        </S.Works>

    );
};

