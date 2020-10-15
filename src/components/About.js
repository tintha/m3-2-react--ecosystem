import React from 'react';
import styled from 'styled-components'

const AboutContainer = styled.div`
    padding: 20px;
    width: 800px;
    margin: auto;
`;

const AboutText = styled.p`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
`;

const AboutTitle = styled.h2`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 22px;
`;

const About = () => {
    return <AboutContainer><AboutTitle>About</AboutTitle>
    <AboutText>Fruit emporium is founded on a very simple principle: Fruit is good.</AboutText>
    <AboutText>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
    </AboutText>
    </AboutContainer>
}

export default About;