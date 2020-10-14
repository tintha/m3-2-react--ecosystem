import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const FruitImage = styled.img`
    width: 200px;
`;

const FruitContainer = styled.div`
    display: inline-block;
    padding: 10px;
    border: 1px solid gray;
    margin: 30px;
    border-radius: 20px;
`;



const ListingGrid = ({ itemList }) => {
    return <div>
        {itemList.map((item) => {
        return <Link to={`/${item.id}`} ><FruitContainer key={item.id}>
            <p>{item.name} </p>
            <p>{item.latinName}</p>
            <FruitImage src={item.imageSrc}></FruitImage>
            </FruitContainer>
            </Link>
        })}
    </div>
  };
  
  ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ListingGrid;