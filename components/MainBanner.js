import React from 'react';
import { MainPage } from './Layouts';
import NavBase from './NavBase';
import Content from './Content';
import GitHubHOC from './Projects';
import styled from '@emotion/styled';
import GithubHOC from './Projects';

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

const FullCard = ({ imgSrc, }) => {
  
  return (
    <Card>

    </Card>
  )
}

const StackCarousel = ({ items }) => {
  const [order, setOrder] = React.useState(items);
  return (
    <>
      {order.map((el, i) => {
        if (i > 0 ) {
          return (
            <Card
              key={i}
              style={{ ...el.style, ...el.positioning }}
              onClick={() => {
                let first = order[0];
                let replace = order[i];
                let arr = order;
                // Switch styling/positoning
                let tmpPos = first.positioning;
                first.positioning = replace.positioning;
                replace.positioning = tmpPos;
                arr.splice(0, 1, replace);
                arr.splice(i, 1, first);
                setOrder([...arr]);
              }}
            >
              <img src={el.imgSrc} height="100px"></img>
            </Card>
          )

        }
        //Return the center card
        return (
          <Card
            key={i}
            style={{ ...el.style, ...el.positioning }}
          >
            <img src={el.imgSrc} height="100px"></img>
          </Card>
        )
      })}
    </>
  )
}


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
        <StackCarousel items={[
          {
            imgSrc: "/static/images/brent-lq.jpg",
            heading: 'Center',
            style: {
              backgroundColor: '#fff',
            },
            positioning: {
              zIndex: 10,
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%, 0%)',
              boxShadow: '0px 3px 8px 1px rgba(0, 0, 0, .3)'
            }
          },
          {
            imgSrc: '/static/svgs/github.svg',
            heading: 'Left',
            style: {
              backgroundColor: 'red',
            },
            positioning: {
              zIndex: 8,
              position: 'absolute',
              left: '50%',
              transform: 'translate(-113%, 17%) scale(0.7)',
              opacity: .27
            }
          },
          {
            imgSrc: '/static/svgs/code.svg',
            heading: 'Right',
            style: {
              backgroundColor: 'green'
            },
            positioning: {
              zIndex: 8,
              position: 'absolute',
              transform: 'translate(13%, 17%) scale(0.7)',
              opacity: .27,
              left: '50%'
            }
          }
        ]} />
      </div>
    </>
  )
}

export default MainBanner;
