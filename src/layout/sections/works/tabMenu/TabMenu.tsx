import React from 'react';
import styled, {StyleSheetManager} from 'styled-components';
import {Link} from "../../../../components/Link";

export type TabStatusType="all"|"landing"|"react"|"spa"

type TabMenuPropsType={
    tabsItems: Array<{title: string, status:  TabStatusType}>
    changeFilterStatus:(value:TabStatusType)=>void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <nav>
                <ul>
                    {props.tabsItems.map((i, index) => {
                        return <ListItem key={index}>
                            <Link active={props.currentFilterStatus===i.status} as={"button"} onClick={()=>{props.changeFilterStatus(i.status)}}>{i.title}</Link>
                        </ListItem>
                    })}
                </ul>
            </nav>
        </StyledTabMenu>
    );
};
const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    //gap: 20px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    //border: 1px solid red;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`

`


