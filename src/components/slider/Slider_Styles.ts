import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  width:100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid red;
`

const Slide = styled.div`
  text-align: center;

`
const Text = styled.p`
  margin-bottom: 5px;

`
const Name = styled.span`
  display: inline-block;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 22px 0 32px

`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: deeppink;
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`
export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}