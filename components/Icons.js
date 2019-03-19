import React from 'react';
import styled from '@emotion/styled';

const Img = styled.img`
    background: linear-gradient(220.4deg, rgba(168, 246, 209, 0.71) 23.72%, rgba(187, 107, 217, 0.71) 88.85%);
    padding: .5rem;
    height: ${props => props.height ? props.height : '1rem'};
    width: ${props => props.width ? props.width : '1rem'};
    border-radius: ${props => props.height};

    @media (max-width: 1201px) {
      margin-left: auto;
      margin-right: 2.5rem;
    }
`;

export const ImgIcon = ({src, alt, height, width}) => ( <Img src={src} alt={alt} height={height} width={width} /> )

const Svg = styled.svg`
    stroke: linear-gradient(220.4deg, rgba(168, 246, 209, 0.71) 23.72%, rgba(187, 107, 217, 0.71) 88.85%);
    stroke-width: 5;
`;

export const SvgIcon = ({src, alt, height, width}) => ( <Svg src={src} alt={alt} height={height} width={width}/> )

const Icons = {
    ImgIcon,
    SvgIcon
}

export default Icons;