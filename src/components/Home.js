import React from 'react';

import {items} from '../data';
import ListingGrid from './ListingGrid'


const Home = () => {
    return <div>
        <h2>Homepage</h2>
        <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
        <p>Browse items:</p>
        <ListingGrid itemList={Object.values(items)}/>
        </div>
}

export default Home;