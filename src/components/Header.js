import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    color: black;
    font-family: "Arial Black", Gadget, sans-serif;
`;

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 800px;
    margin: auto;
`;

const NavLinks = styled.div`
    // style later
`;

const StyledLink = styled(NavLink)`
  color: #4350e0;
  font-weight: bold;
  font-size: 16px;
  display: inline;
  margin-left: 1rem;
  text-decoration: none;
  font-family: "Arial Black", Gadget, sans-serif;

  &:hover {
    text-decoration: underline;
    color: #cc43a1;
  }
  &.active {
    color: red;
  }
`;

const Header = () => {
    return (
        <header>
            <NavBar>
                <Title>Fruit Emporium</Title>
            <NavLinks>
                <StyledLink exact to="/" activeStyle={{color: '#b16fbf', textDecoration: 'underline', fontWeight: 'bolder'}}>Home</StyledLink>
                <StyledLink exact to="/about" activeStyle={{color: '#b16fbf', textDecoration: 'underline', fontWeight: 'bolder'}}>About</StyledLink>          
            </NavLinks>            
            </NavBar>
        </header>
    );
}

export default Header;