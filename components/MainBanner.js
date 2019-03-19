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
  position: relative;
  width: 100%;
  background: ${({ primary, secondary }) => `linear-gradient(137deg, ${primary} 32%, ${secondary} 100%)`};

  * {
    position: absolute;
  }
`;

const BannerH1 = styled.h1`
  max-width: 40rem;
  min-width: 30rem;
  margin: 0px auto;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, .9);
  font-family: POLYA;
  font-style: normal;
  font-weight: normal;
  line-height: 14.5rem;
  font-size: 8.65rem;
  text-align: center;
  letter-spacing: 0.075em;
`;

const BannerH2 = styled.h2`
  width: 30rem;
  min-width: 20rem;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  color: rgba(0, 0, 0, .2);
  font-family: POLYA;
  font-style: normal;
  font-weight: normal;
  line-height: 7.25rem;
  font-size: 7.25rem;
  text-align: center;
  letter-spacing: 0.075em;
  filter: blur(2px);
`;

const H1 = styled.h1`
    font-family: FARRAY;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 28px;
    color: #878787;
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
        <BannerH1>
          BRENT SOLES
              </BannerH1>
        <BannerH2>
          BRENT SOLES
              </BannerH2>
      </GradientDiv>
      <Content
        id={"about"}
        imgSrc={'/static/images/brent-mq.jpg'}
        alt={'muuuuuugshot'}
        size={'14.4rem'}
        pageName={`WHO I AM`}
      >
        <H1>I'm a Christian, a developer and an aspiring designer</H1>
        <P>
          I am based out of Portland, OR; and have lived in the PNW for the past 3 years.
          My first passion in life is my faith. I am a Christian, soon-to-be husband, and total nerd. 
          I even have the glasses to prove it!
        </P>
        <P>
          My expertise is in fullstack development, with an emphsis on React, Node.js and MongoDB.
          In this site you'll find some of my personal projects, as well as some services I offer as a freelancer (soon hopefull a blog!).
        </P>
        <P>
          If you'd like to reach out, I'd love to talk with you! There is a form at the bottom of the page.
        </P>
        <P>
          God bless, and thank you for taking the time to read!
        </P>
        <P>
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
      {/* <Content
        id={"services"}
        imgSrc={'/static/svgs/code.svg'}
        alt={'hire me'}
        size={'14.4rem'}
        pageName={`SERVICES`}
      ></Content> */}
    </MainPage>
  )
}

export default MainBanner;
