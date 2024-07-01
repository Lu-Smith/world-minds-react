import React from 'react';
import styled from 'styled-components';

const HelpersWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #f0ece2; 
  background: #233142;
  max-width: 900px;
  margin: 0 auto;
`;

const ContactContainer = styled.ul`
  list-style: none;
  text-align: center;
  letter-spacing: 1px;
  width: 45vw;
`;

const ContactLi = styled.li`
  padding: 0.2em 0;
  transition: 200ms all ease;
  cursor: pointer;

  &:hover {
    color: black; 
    font-weight: bold;
    letter-spacing: 0;
  }
`;

const HelpersContainer = styled.ul`
  padding: 1em;
  list-style: none;
  text-align: center;
  width: 45vw;
  border-left: 2px solid black;
`;

const ListLi = styled.li`
  color: #f0ece2;
  transition: 200ms all ease;
  cursor: pointer;

  &:hover {
    color: black; 
    font-weight: bold;
    letter-spacing: 0;
  }
`;

const FooterHelpers: React.FC = () => {
  return (
    <HelpersWrapper role='footerHelpers' >
      <ContactContainer data-testid='contactContainer'>
        <ContactLi role='contactLink'>Contact us</ContactLi>
        <ContactLi data-testid='phoneNumber'>+1-543-123-4567</ContactLi>
        <ContactLi data-testid='email'>example@worldminds.com</ContactLi>
      </ContactContainer>
      <HelpersContainer data-testid='helpersContainer'>
        <ListLi role='homeLink'>About Us</ListLi>
        <ListLi role='faqLink'>FAQ</ListLi>
        <ListLi role='careerLink'>Career</ListLi>
        <ListLi role='blogLink'>Blog</ListLi>
        <ListLi role='supportLink'>Support</ListLi>
      </HelpersContainer>
    </HelpersWrapper>
  )
}

export default FooterHelpers