import React from 'react';
import styled from 'styled-components'

import {items} from '../data';
import ListingGrid from './ListingGrid'

const HomeContainer = styled.div`
    padding: 20px;
    width: 800px;
    margin: auto;
`;

const HomeText = styled.p`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
`;

const HomeTitle = styled.h2`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 22px;
`;

const Home = () => {
    return <HomeContainer>
        <HomeTitle>Homepage</HomeTitle>
        <HomeText>Fruit emporium sells the finest fruits from this world and beyond.</HomeText>
        <HomeText>Browse items:</HomeText>
        <ListingGrid itemList={Object.values(items)} />
        </HomeContainer>
}

export default Home;