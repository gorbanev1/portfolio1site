import React from 'react';
import styled, {StyleSheetManager} from 'styled-components';
import {Link} from "../../../../components/Link";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <nav>
                <ul>
                    {props.menuItems.map((i, index) => {
                        return <ListItem key={index}>
                            <Link href="">{i}</Link>
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
    gap: 20px;
    justify-content: center;
    margin-bottom: 40px;
  }
`

const ListItem = styled.li`

`


