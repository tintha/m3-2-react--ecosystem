import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const FruitImage = styled.img`
    width: 160px;
`;

const FruitContainer = styled.div`
    display: inline-block;
    padding: 10px;
    border: 1px solid gray;
    margin: 30px;
    border-radius: 20px;
`;

const FruitName = styled.p`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
`;

const FruitLatinName = styled.p`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 12px;
    text-align: center;
    font-style: italic;
`;



const ListingGrid = ({ itemList }) => {
    return <div>
        {itemList.map((item) => {
        return <Link to={`/items/${item.id}`} key={item.id}><FruitContainer>
            <FruitName>{item.name} </FruitName>
            <FruitLatinName>{item.latinName}</FruitLatinName>
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