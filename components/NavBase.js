import React, { useState } from 'react';
import styled from '@emotion/styled';

const NavWrapper = styled.a`
    position: fixed;
    top: 6rem;
    right: 6rem;
    
`;

const mainProps = {
    primary: '#BB6BD9',
    secondary: '#A8F6D1'
}

const NavBase = () => {

    const { primary, secondary } = mainProps;

    const [selected, setSelected] = useState({
        current: "home"
    });

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

    // Kinda Hacky wrapping everything in an <a> tag
    return (
        <NavWrapper onClick={e => {
            const { id } = e.target;
            const { current } = selected;
            // Prevent useless state re-update
            if(id !== current && e.target.id){
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
            }>
            <svg width="176" height="158" viewBox="0 0 176 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0682373 58.635L175.068 118.447V157.43L0.0682373 98.3313V58.635Z" fill="#878787"/>
                <path d="M0.46521 0.628174L175.465 60.4404V99.4232L0.46521 40.3245V0.628174Z" fill="#878787"/>
                <path id={nav.home.name} d="M0.0681946 2.15457H175.068V42.1546H0.0681946V2.15457Z" fill={nav.home.selected ? secondary : primary} />
                <path id={nav.projects.name} d="M0.0681946 59.4231H175.068V99.4231H0.0681946V59.4231Z" fill={nav.projects.selected ? secondary : primary}/>
                <path id={nav.services.name} d="M0.0681946 117.43H175.068V157.43H0.0681946V117.43Z" fill={nav.services.selected ? secondary : primary}/>
            </svg>
        </NavWrapper>
    );
}


export default NavBase;