import React from 'react';
import styled from '@emotion/styled';

const MainPageStyle = styled.div`
    display: grid;
    grid-template-rows: 30rem repeat(3, 80rem);
`;

export const MainPage = (props) => (
    <MainPageStyle>
        {props.children}
    </MainPageStyle>
)