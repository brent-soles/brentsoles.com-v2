const sharedBackGroundStyles = {
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, .1)',
  zIndex: 8,
  opacity: .27,
  left: '50%'
}


export const cards = [
  {
    imgSrc: "/static/images/brent-lq.jpg",
    heading: 'Center',
    style: {
    
    },
    positioning: {
      backgroundColor: '#fff',
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
    },
    positioning: {
      ...sharedBackGroundStyles,
      transform: 'translate(-113%, 17%) scale(0.7)',
      
    }
  },
  {
    imgSrc: '/static/svgs/code.svg',
    heading: 'Right',
    style: {
      
    },
    positioning: {
      ...sharedBackGroundStyles,
      transform: 'translate(13%, 17%) scale(0.7)',
    }
  }
]