import React, { useState } from 'react';
import NavBox from './NavBox'
import styled from '@emotion/styled';

const NavWrapper = styled.nav`
    position: fixed;
    top: 6rem;
    right: 6rem;
    display: flex;
    flex-direction: column;
    margin: 0rem;
    z-index: 1;
`;

const mainProps = {
    primary: '#BB6BD9',
    secondary: '#A8F6D1'
}

const NavBase = () => {

    const { primary, secondary } = mainProps;

    //Sets Up Nav Elements
    const [selected, setSelected] = useState({current: "home"});
    const [nav, setCurrNav] = useState({
        home: {
            name: "home",
            selected: true
        },
        projects: {
            name: "projects",
            selected: false
        },
        services: {
            name: "services",
            selected: false
        }
    });

    const updateCurrent = (id) => {
        const { current } = selected;
        // Prevent state re-update for currently selected
        if(id !== current && id){
            setCurrNav({
                ...nav,
                [current]: {
                    ...nav[current],
                    selected: false
                },
                [id]: {
                    ...nav[id],
                    selected: true
                }
            });
            setSelected({
                current: id
            });
        }
    }

    return (
        <NavWrapper onClick={e => updateCurrent(e.target.id)}>
            <NavBox id={nav.home.name} fill={nav.home.selected ? secondary : primary}/>
            <NavBox id={nav.projects.name} fill={nav.projects.selected ? secondary : primary}/>
            <NavBox id={nav.services.name} fill={nav.services.selected ? secondary : primary}/>
        </NavWrapper>
    );
}


export default NavBase;