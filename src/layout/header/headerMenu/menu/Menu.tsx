import React from 'react';
import {S} from './../HeaderMenu_Styles'

export const items = [
    {
        title: 'Home',
        href: "home"
    },
    {
        title: 'Skills',
        href: "skills"
    },
    {
        title: 'Works',
        href: "works"
    },
    {
        title: 'Testimonials',
        href: "testimonials"
    },
    {
        title: 'Contact',
        href: "contact"
    },
    ]
//export const items = ['Home', 'Skills', 'Works', 'Testimonials', 'Contact',]

export const Menu:React.FC = () => {
    return (
        <ul>
            {items.map((i, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        to={i.href}
                        smooth={true}
                    >
                        {i.title}
                        <S.Mask>
                            <span>{i.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{i.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

