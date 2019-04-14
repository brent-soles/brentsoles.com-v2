const sharedBackGroundStyles = {
  position: 'absolute',
  boxShadow: '0px 6px 12px 1px rgba(0, 0, 0, .6)',
  backgroundColor: 'rgba(0, 0, 0, .1)',
  zIndex: 8,
  opacity: .27,
  left: '50%'
}


export const cards = [
  {
    imgSrc: "/static/images/brent-lq.jpg",
    header: 'Hello.',
    content: {
      summary: 'My name is Brent and I am a developer/desginer based in Portland, OR. If you would like to know more about me, please reach out and connect!',
      points: [
        { title: 'email', description: 'brentsoles@protonmail.com' },
        { title: 'linkedin', description: 'https://lbah'}
      ]
    },
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
    header: 'Projects.',
    content: {
      summary: 'Some projects I have worked on and are continuing to develop:',
      points: [
        { title: 'Reeych', description: 'A ministry communication tool for churches.' },
        { title: 'funnl', description: 'A \'funcitonal\' utility for result piping.' },
        { title: 'aleve', description: 'A cli server for quickly prototyping HTML/CSS/JS' }
      ]
    },
    style: {
    },
    positioning: {
      ...sharedBackGroundStyles,
      transform: 'translate(-113%, 17%) scale(0.7)',
      
    }
  },
  {
    imgSrc: '/static/svgs/code.svg',
    header: 'Tech.',
    content: {
      summary: 'Here are some of the technologies I work with and love to use:',
      points: [
        { title: 'ReactJS', description: '1yr.'},
        { title: 'Node.js', description: '2yr.'},
        { title: 'Elixir', description: '6mo.'}
      ]
    },
    style: {
    },
    positioning: {
      ...sharedBackGroundStyles,
      transform: 'translate(13%, 17%) scale(0.7)',
    }
  }
]