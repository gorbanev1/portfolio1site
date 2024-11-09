import styled from "styled-components";
import {start} from "repl";

type FlexWrapperPropType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    width?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropType>`
  display: flex;
  flex-direction: ${props => props.direction||"row"};
  justify-content: ${props=> props.justify||"flex-start"};
  align-items: ${props=> props.align||"stretch"};
  flex-wrap: ${props=> props.wrap||"nowrap"};
  width: ${props=> props.width||"100%"};
  height: 100%;
`