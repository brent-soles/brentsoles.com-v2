import React from 'react';
import styled from '@emotion/styled';

const ProjectCard = styled.div`
    width: 14.4rem;
    height: 14.4rem;
    margin: .3rem;
    background-color: red;
`;

const GithubHOC = ({ projects }) => {
    return projects.map( (prj, index) => {
            const { name } = prj;
            return (
                <ProjectCard key={index}>
                    <h1>{name}</h1>
                </ProjectCard>
            )
        } 
    )
}


export default GithubHOC;