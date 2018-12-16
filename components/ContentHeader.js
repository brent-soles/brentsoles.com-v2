// Presentational Component
// Will be used for each page header
import React from 'react';
import styled from '@emotion/styled';
import { ImgIcon, SvgIcon } from './Icons'

const ContentHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
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

const ContentHeader = ({id, imgSrc, alt, pageName, size}) => (
    <ContentHeaderContainer id={id} name={id}>
        <ImgIcon src={imgSrc} alt={alt} height={size} width={size} />
        <PageName>{pageName}</PageName>
    </ContentHeaderContainer>
)

export default ContentHeader;