import React from 'react';
import { MainPage } from './Layouts';
import NavBase from './NavBase';
import Content from './Content';
import GitHubHOC from './Projects';
import styled from '@emotion/styled';
import GithubHOC from './Projects';
import { cards } from '../content/cards'

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
  const [hover, setHover] = React.useState(false);

  const handleClick = (i) => {
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
  }

  return (
    <>
      {order.map((el, i) => {
        if (i > 0 ) {
          return (
            <Card
              key={i}
              style={{ ...el.style, ...el.positioning, opacity: hover ? .5 : .27 }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => handleClick(i)}
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
        <StackCarousel items={cards} />
      </div>
    </>
  )
}

export default MainBanner;
