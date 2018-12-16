import React, { userState } from 'react';
import ContentHeader from './ContentHeader';
import styled from '@emotion/styled';

export const ContentContainer = styled.div`
    width: inherit;
    height: auto;
    padding: 2rem;
    margin: 2rem 6rem;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const ContentBody = styled.div`
    max-width: 60rem;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
`;


const Content = (props) => {
    return (
        <ContentContainer>
            <ContentHeader {...props}/>
            <ContentBody >
                {!!props.children && props.children}
            </ContentBody>
        </ContentContainer>
    )
}

export default Content;