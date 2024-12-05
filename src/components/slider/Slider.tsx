import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles';
import "./../../styles/slider.css"


type SlidePropsType={
    text: string
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text> {props.text}</S.Text>
            <S.Name>{props.userName}</S.Name>
        </S.Slide>
    )
}

const handleDragStart = (e: any) => e.preventDefault();

const items = [
    <Slide userName={"Ivan"}  text={"ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n" +
        "                        elit."}  />,
    <Slide  userName={"Ashot"} text={"ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n" +
        "                        elit."} />,
    <Slide userName={"Dmitriy"}  text={"ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n" +
        "                        elit."} />,

];

export const Slider = () =>
    <S.Slider>
        <AliceCarousel mouseTracking
                       items={items}
                      /* renderPrevButton={()=>{
                           return <Icon iconId={"codeSvg"}/>
                       }}*/
        />
    </S.Slider>


/*
import React from 'react';
import styled from "styled-components";

import {FlexWrapper} from "../FlexWrapper";

export const Slider:React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</S.Text>
                    <S.Name>@ivan ivanow</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

*/
