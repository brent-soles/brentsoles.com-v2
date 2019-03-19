import React from 'react';
import styled from '@emotion/styled';

const ProjectCard = styled.a`
    width: 17.4rem;
    height: 17.4rem;
    margin: .3rem;
    border-radius: .2rem;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, .2);

    display: grid;
    grid-template-rows: 5rem auto 2rem;
    text-decoration: none;
    color: #878787;
    word-break: break-word;
    padding: 1rem;

    h1 {
        font-family: FARRAY;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
    }

    h2 {
        font-family: FARRAY;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
    }

    p {
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
    }

    @media (max-width: 762px) {
      width: 23.95rem;
    }

    @media (max-width: 408px) {
      width: 35.4rem;
    }
`;

const GithubHOC = ({ projects }) => {
    return projects.map((prj, index) => {
            const { name, html_url, description, language } = prj;
            return (
                <ProjectCard key={index} href={html_url}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h2>{language}</h2>
                </ProjectCard>
            )
        } 
    )
}


export default GithubHOC;