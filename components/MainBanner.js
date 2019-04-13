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
  
  min-width: 33%;
  max-width: 33%;
  min-height: 500px;
  margin: 0px auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  z-index: 10;

  transition: .25s ease-in-out;
  &:hover {
    box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, .3);
  }

  @media (max-width: 1330px) {
    min-width: 66%;
    max-width: 66%;
  }
`;

const SecondaryCard = (props) => {
  const [hover, setHover] = React.useState(false);
  const [screenSmall, setScreenSmall] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if(window) {
        if(window.innerWidth < 600){
          setScreenSmall(true);
          return;
        }

        setScreenSmall(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [screenSmall])

  return (
    <Card
      style={{
        ...props.styles,
        // transform: screenSmall ? 
        opacity: hover ? .5 : .27 
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={props.onClick ? props.onClick : () => null}
    >
      {props.children}
    </Card>
  )
}

const StackCarousel = ({ items }) => {
  const [order, setOrder] = React.useState(items);

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

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.key){
        case 'ArrowLeft':
          handleClick(1);
          break;
        case 'ArrowRight':
          handleClick(2);
          break;
        default:
          return;
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      console.log('removing');
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [order]);

  return (
    <>
      {order.map((el, i) => {
        if (i > 0 ) {
          return (
            <SecondaryCard
              key={i}
              styles={{ ...el.style, ...el.positioning}}
              onClick={() => handleClick(i)}
            >
              <img src={el.imgSrc} height="100px"></img>
            </SecondaryCard>
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
          marginTop: '-6%;',
          width: '100%',
          height: '55rem',
          position: 'relative',
          overflowX: 'hidden'
        }}
      >
        <StackCarousel items={cards} />
      </div>
      <p
        style={{
          textAlign: 'center'
        }}
      >use arrow keys to move tiles</p>
    </>
  )
}

export default MainBanner;
