import React from 'react';
import {s} from './../HeaderMenu_Styles'

export const Menu:React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((i, index) => {
                return <s.MenuItem key={index}>
                    <s.Link href="">{i}
                        <s.Mask>
                            <span>{i}</span>
                        </s.Mask>
                        <s.Mask>
                            <span>{i}</span>
                        </s.Mask>
                    </s.Link>
                </s.MenuItem>
            })}
        </ul>
    );
};

