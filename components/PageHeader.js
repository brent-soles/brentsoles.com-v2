// Presentational Component
// Will be used for each page header
import React from 'react';
import styled from '@emotion/styled';
import { ImgIcon, SvgIcon } from './Icons'

const ContentDiv = styled.div`
    width: inherit;
    margin: 2rem 6rem;
    display: flex;
    justify-content: space-between;
`;

const PageName = styled.h1`
    font-family: FARRAY;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    width: 17.5rem;
    text-align: center;
    line-height: 28px;
    color: #878787;
    padding-top: 6rem;
    
    border-left: 3px solid #C6C6C6
`

const ContentHeader = ({imgSrc, alt, pageName, size}) => (
    <ContentDiv>
        <ImgIcon src={imgSrc} alt={alt} height={size} width={size} />
        <PageName>{pageName}</PageName>
    </ContentDiv>
)

export default ContentHeader;