import React from 'react';
import MainBanner from '../components/MainBanner';

const App = (props) => {
    return (
        <>
            <MainBanner {...props} />
        </> 
    )
}

App.getInitialProps = async () => {
    try {
        const res = await fetch(`http://localhost:8080/api/github`);
        const projects = await res.json();
        return {
            projects
        }
    } catch (err) {
        return {
            projects: [
                {
                    name: `Sorry! My projects are unavailable`,
                    html_url: `https://github.com/brent-soles`,
                    description: `Please click the header to see my Github repo.`,
                    language: null
                }
            ]
        }
    }
}

export default App;