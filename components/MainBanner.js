import React from 'react';
import { MainPage } from './Layouts';
import NavBase from './NavBase';
import ContentHeader from './PageHeader';
import styled from '@emotion/styled';


const gradientProps = {
    primary: '#BB6BD9',
    secondary: '#A8F6D1'
}

const GradientDiv = styled.div`

    width: 100%;
    background: ${({primary, secondary}) => `linear-gradient(137deg, ${primary} 32%, ${secondary} 100%)`};

    display: flex;
    justify-content: center;

    h1 {
        position: absolute;
        top: -6.2rem;
        width: 60rem;
        color: white;
        font-family: POLYA;
        font-style: normal;
        font-weight: normal;
        line-height: 20.5rem;
        font-size: 14.4rem;
        text-align: center;
        letter-spacing: 0.07em;
    }

    h2 {
        position: absolute;
        text-align: center;
        color: #878787;
        width: 60rem;
        text-align: center;
        font-family: POLYA;
        font-weight: normal;
        font-size: 9.6rem;
        line-height: 11.2rem;
        margin-top: 4rem;
        letter-spacing: 0.07em;
    }
`;

const MainBanner = () => (
    <MainPage>
        <NavBase />
        <GradientDiv {...gradientProps}>
            <h2>BRENT SOLES</h2>
            <h1>BRENT SOLES</h1>
        </GradientDiv>
        <ContentHeader 
            imgSrc={'/static/images/brent-mq.jpg'}
            alt={'muuuuuugshot'}
            size={'14.4rem'}
            pageName={`WHO I AM`}
        />
        <ContentHeader 
            imgSrc={'/static/svgs/github.svg'}
            alt={'prjs plz'}
            size={'14.4rem'}
            pageName={`PROJECTS`}
        />
        <ContentHeader 
            imgSrc={'/static/svgs/code.svg'}
            alt={'hire me'}
            size={'14.4rem'}
            pageName={`SERVICES`}
        />
    </MainPage>
)

export default MainBanner;
