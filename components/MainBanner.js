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

const H1 = styled.h1`
    font-family: FARRAY;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 28px;
    color: #878787;
    padding-top: 6rem;
`
const P = styled.p`
    margin-top: 6rem;
    font-size: 2rem;
    font-family: Helvetica;
    color: #878787;
`;

const MainBanner = ({ projects }) => {
    return (
        <MainPage>
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
            >
                <H1>I'm a Christian, a developer and an aspiring designer</H1>
                <P>I am based out of Portland, OR; and have lived in the PNW for the past 3 years.
                    <br></br><br></br>
                    My first passion in life is my faith. I am a Christian, soon-to-be husband, and total nerd. I even have the glasses to prove it!
                    <br></br><br></br>
                    My expertise is in fullstack development, with an emphsis on React, Node.js and MongoDB.

                    In this site you'll find some of my personal projects, as well as some services I offer as a freelancer (soon hopefull a blog!).
                    <br></br><br></br>
                    If you'd like to reach out, I'd love to talk with you! There is a form at the bottom of the page.
                    <br></br><br></br>
                    God bless, and thank you for taking the time to read!
                    <br></br><br></br>
                    - Brent
                </P>
            </Content>
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
