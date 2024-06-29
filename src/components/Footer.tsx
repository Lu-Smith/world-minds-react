import React from 'react';
import styled from 'styled-components';
import SocialMedia from '../assets/SocialMedia';
import FooterLink from '../assets/FooterLink';
import FooterHelpers from '../assets/FooterHelpers';

const FooterText = styled.h4`
  font-size: 14px;
  padding: 1em  0;
  color: #596e79; 
  font-family: "Playwrite US Modern", cursive;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <SocialMedia />
      <FooterHelpers />
      <FooterText>
        Coded by
        <FooterLink href='https://www.lunasmithart.com' target='_blank' role='portfolio'>Luna Smith</FooterLink>
        , open-source on
        <FooterLink href='https://github.com/Lu-Smith/world-minds-react' target='_blank' role='GitHub'>GitHub</FooterLink>.
      </FooterText>
    </>
  )
}

export default Footer