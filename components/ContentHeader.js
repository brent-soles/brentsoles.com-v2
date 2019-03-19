// Presentational Component
// Will be used for each page header
import React from 'react';
import styled from '@emotion/styled';
import { ImgIcon, SvgIcon } from './Icons'

const ContentHeaderContainer = styled.div`
  width: 100%;

  @media (max-width: 407px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 1;
  }
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

    grid-column: 3;
    grid-row: 1;
`;

const ContentHeader = ({id, imgSrc, alt, pageName, size, children}) => (
    <ContentHeaderContainer id={id} name={id}>
        <ImgIcon src={imgSrc} alt={alt} height={size} width={size} />
        {/* {children} */}
        <PageName>{pageName}</PageName>
    </ContentHeaderContainer>
)

export default ContentHeader;