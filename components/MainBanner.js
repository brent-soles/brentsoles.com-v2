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
  
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  
  transition: .25s ease-in-out;
  &:hover {
    box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, .3);
  }

  @media (max-width: 1330px) {
    min-width: 45%;
    max-width: 45%;
  }

  @media (max-width: 1000px) {
    min-width: 66%;
    max-width: 66%;
  }
`;

const SecondaryCard = (props) => {
  const [hover, setHover] = React.useState(false);

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





const CardContent = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20rem auto;
  margin: 0px auto;
  width: 90%;

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  
  
  header > h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    min-width: 100px;
  }

  header > * {
    margin: auto 20px;
  }

  section {
    overflow: scroll;
  }

  section * {
    font-family: 'Nunito', sans-serif;
    font-size: 2rem;
  }

  ul {
    margin: 6.5rem 0;
    list-style-type: none;
  }

  li {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
  }

  li > *:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 800px) {
    header > * {
      margin: auto 10px;
    }
  }

`;




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
              <CardContent>
                <header>
                  <img 
                    src={el.imgSrc} 
                    height="100px"
                    style={{borderRadius: '100px'}}
                  ></img>
                  <h1>{el.header}</h1>
                </header>
                <section>
                  <p>{el.content.summary}</p>
                  <ul>
                    {el.content.points.map((el, i) => {
                      return <li key={(i+10)*i}>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                      </li>
                    })}
                  </ul>
                </section>
              </CardContent>
            </SecondaryCard>
          )

        }
        //Return the center card
        return (
          <Card
            key={i}
            style={{ ...el.style, ...el.positioning }}
          >
            <CardContent>
              <header>
                  <img 
                    src={el.imgSrc} 
                    height="100px"
                    style={{borderRadius: '100px'}}
                  ></img>
                  <h1>{el.header}</h1>
                </header>
                <section>
                  <p>{el.content.summary}</p>
                  <ul>
                    {el.content.points.map((el, i) => {
                      return <li key={(i+10)*i}>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                      </li>
                    })}
                  </ul>
                </section>
              </CardContent>
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
          marginTop: '-6%',
          paddingTop: '.6rem',
          width: '100%',
          height: '66rem',
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
