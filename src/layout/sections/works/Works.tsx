import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/Portfolio1.png'
import timerImg from '../../../assets/images/Portfolio2.png'
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

//const tabsItems = ['All', 'Landing Page', 'React', 'Spa']
const tabsItems: Array<{status: TabStatusType, title: string }>  = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },

]
const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"

    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react"
    },
]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks= worksData

    if (currentFilterStatus==="landing"){
        filteredWorks=worksData.filter(work=>work.type==="landing")
    }
    if (currentFilterStatus==="react"){
        filteredWorks=worksData.filter(work=>work.type==="react")
    }
    if (currentFilterStatus==="spa"){
        filteredWorks=worksData.filter(work=>work.type==="spa")
    }
    function changeFilterStatus(value:TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={'space-around'} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((i, index) =>
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

