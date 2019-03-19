import React, { userState } from 'react';
import { ImgIcon, SvgIcon } from './Icons'
import ContentHeader from './ContentHeader';
import styled from '@emotion/styled';

export const ContentContainer = styled.div`
    width: inherit;
    height: auto;
    padding: 2rem;
    margin: 2rem 6rem;
    position: relative;
    display: grid;

    // lg
    @media (min-width: 1201px){
      grid-template-columns: 18rem 1fr 18rem;
    }

    @media (max-width: 1200px) and (min-width: 440px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 439px) {
      margin: 2rem 0rem;
      padding: 1rem;
    }

`;

export const ContentBody = styled.div`
    max-width: 60rem;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    padding-top: 6rem;

    @media (min-width: 1201px){
      grid-column: 2;
      grid-row: 1;
    }

    @media (max-width: 1200px) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row: 2;
    }

    // @media (max-width: 407px) {
    //   grid-column-start: 1;
    //   grid-column-end: 3;
    //   grid-row: 2;
    // }
`;


const PageName = styled.h1`
  font-family: FARRAY;
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  width: 17.5rem;
  height: 28px;
  text-align: center;
  line-height: 28px;
  color: #878787;
  padding: 6rem 0rem;
  border-left: 3px solid #C6C6C6;

  @media (min-width: 1201px){
    grid-column: 3;
    grid-row: 1;
  }

  @media (max-width: 1200px) and (min-width: 408px) {
    grid-column: 2;
    grid-row: 1;
  }

`;

const Content = ({ id, imgSrc, alt, pageName, size, children }) => {
    return (
        <ContentContainer id={id}>
            {/* <ContentHeader {...props} /> */}
            <ImgIcon src={imgSrc} alt={alt} height={size} width={size} />
            
            <ContentBody >
                  {!!children && children}
            </ContentBody>
            <PageName>{pageName}</PageName>
        </ContentContainer>
    )
}

export default Content;