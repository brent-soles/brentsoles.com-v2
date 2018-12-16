import React from 'react';
import styled from '@emotion/styled';

const Svg = (props) => {
    const {width, height, viewBox} = props;
    return (
        <svg width={`${width}`} height={`${height}`} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            {props.children}
        </svg>
    )
}

const Path = ({id, fill, data,}) => (
    <path id={id} d={data} fill={fill} />
)

const A = styled.a`
    margin: 1rem 0px;
`;

const NavBox = ({id, fill}) => (
        <A href={`#${id}`}>
            <Svg width={175} height={40} viewBox={'0 0 175 40'}>
                <Path id={id} data={"M0.0681946 0.156765H175.068V40.1568H0.0681946V0.156765Z"} fill={fill} />
            </Svg>
        </A>
)

export default NavBox;

//console.log(Svg);

{/* <svg width="175" height="41" viewBox="0 0 175 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0681946 0.156765H175.068V40.1568H0.0681946V0.156765Z" fill="white"/>
</svg> */}
