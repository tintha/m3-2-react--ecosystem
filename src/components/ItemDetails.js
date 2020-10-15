import React from 'react';
import { useParams } from "react-router";
import styled from 'styled-components'
import { items, sellers } from '../data';

const ItemContainer = styled.div`
    display: flex;
    padding: 20px;
    width: 800px;
    margin: auto;
`;

const ItemDetailsContainer = styled.div`
    padding-left: 20px;

    & h2 {
        font-family: "Arial Black", Gadget, sans-serif;
    }
`;

const SellerContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;


const FruitImg = styled.img`
    width: 300px;
    margin-top: 26px;
    border-radius: 14px;
`;

const SellerAvatar = styled.img`
    width: 50px;
    border-radius: 50%;
    margin-right: 5px;
`;

const Button = styled.button`
    padding: 16px;
    background-color: #4c30ff;
    color: white;
    border: none;
    border-radius: 10px;
`;

const DetailText = styled.p`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
`;

const BoldText = styled.span`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bolder;
`;

const BoldGreyText = styled.span`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bolder;
    color: #6e6e6e;
`;

const FruitLatinN = styled.p`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 12px;
    font-style: italic;
`;

const ItemDetails = () => {
   const params = useParams();
   const fruit = items[params.itemId];
   let outOfStock;
   if (fruit.quantity == 0) {
    outOfStock = 'Out of stock';
   } else {
      outOfStock = <Button>${fruit.price} - Buy now</Button>
   }
  
    return <ItemContainer>
      <div><FruitImg src={fruit.imageSrc}></FruitImg></div>
      <ItemDetailsContainer>
      <h2>{fruit.name}</h2>
      <FruitLatinN>{fruit.latinName}</FruitLatinN>
      <DetailText>{fruit.description}</DetailText>
      <DetailText>Product of <em>{fruit.countryOfOrigin}</em></DetailText>
      <BoldGreyText>{outOfStock}</BoldGreyText>
      <SellerContainer>
          <div><SellerAvatar src={sellers[fruit.sellerId].avatarSrc}></SellerAvatar></div>
          <div><DetailText>Sold by: <BoldText>{sellers[fruit.sellerId].storeName}</BoldText></DetailText></div>          
      </SellerContainer>      
      </ItemDetailsContainer>
      </ItemContainer>
}

export default ItemDetails;