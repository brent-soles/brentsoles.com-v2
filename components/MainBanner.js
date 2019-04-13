import React from 'react';
import { MainPage } from './Layouts';
import NavBase from './NavBase';
import Content from './Content';
import GitHubHOC from './Projects';
import styled from '@emotion/styled';
import GithubHOC from './Projects';
import { red } from 'ansi-colors';

const Card = styled.div`
  border-radius: 12px;
  align-items: center;
  background: yellow;
  max-width: 50%;
  min-width: 500px;
  min-height: 500px;
  margin: 0px auto;
  margin-top: -6%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  z-index: 10;

  transition: .25s ease-in-out;
  &:hover {
    box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, .3);
  }
`;


const MainBanner = ({ projects }) => {
  return (
    <>
      <img src="/static/main-header-2.svg" style={{width: '100%', position: 'relative', zIndex: 9}}></img>
      <div
        style={{
          background: 'red',
          width: '100%',
          // display: 'flex',
          // flexDirection: 'row',
          position: 'relative',
          // paddingLeft: '39%'
        }}
      >
        <Card
          style={{
            zIndex: 8, 
            backgroundColor: 'red',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-113%, 17%) scale(0.7);',
            opacity: .27
          }}
        >
          <img src="/static/svgs/github.svg" height="160px"
            style={{
              borderRadius: '160px'
            }}
          ></img>
          <h1>LEFT</h1>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
        </Card>
        <Card
          style={{
            zIndex: 10, 
            backgroundColor: '#fff',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            boxShadow: '0px 3px 8px 1px rgba(0, 0, 0, .3)'
          }}
        >
          <img src="/static/images/brent-lq.jpg" height="160px"
            style={{
              borderRadius: '160px'
            }}
          ></img>
          <h1>CENTER</h1>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
        </Card>
        <Card
          style={{
            zIndex: 8, 
            backgroundColor: 'green',
            position: 'absolute',
            transform: 'translate(13%, 17%) scale(0.7);',
            opacity: .27,
            left: '50%'
          }}
        >
          <img src="/static/svgs/code.svg" height="160px"
            style={{
              borderRadius: '160px'
            }}
          ></img>
          <h1>RIGHT</h1>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
          <p>
            Content content content
          </p>
        </Card>
      </div>
    </>
  )
}

export default MainBanner;
