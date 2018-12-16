import React from 'react';
import { MainPage } from './Layouts';
import NavBase from './NavBase';
import Content from './Content';
import GitHubHOC from './Projects';
import styled from '@emotion/styled';
import GithubHOC from './Projects';


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

const MainBanner = ({ projects }) => {
    return (
        <MainPage>
            <NavBase />
            <GradientDiv {...gradientProps}>
                <h2>BRENT SOLES</h2>
                <h1>BRENT SOLES</h1>
            </GradientDiv>
            <Content 
                id={"home"}
                imgSrc={'/static/images/brent-mq.jpg'}
                alt={'muuuuuugshot'}
                size={'14.4rem'}
                pageName={`WHO I AM`}
            ></Content>
            <Content 
                id={"projects"}
                imgSrc={'/static/svgs/github.svg'}
                alt={'prjs plz'}
                size={'14.4rem'}
                pageName={`PROJECTS`}
            >
                <GithubHOC projects={projects} />
            </Content>
            <Content 
                id={"services"}
                imgSrc={'/static/svgs/code.svg'}
                alt={'hire me'}
                size={'14.4rem'}
                pageName={`SERVICES`}
            ></Content>
        </MainPage>
    )
}

export default MainBanner;
