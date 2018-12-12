import React from 'react';
import styled from '@emotion/styled';

const MainPageStyle = styled.div`
    display: grid;
    grid-template-rows: 30rem auto;
`;

export const MainPage = (props) => (
    <MainPageStyle>
        {props.children}
    </MainPageStyle>
)