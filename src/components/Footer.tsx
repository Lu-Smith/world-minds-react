import React from 'react';
import { FooterText } from '../styles/FooterStyles';
import SocialMedia from '../assets/SocialMedia';
import FooterLink from '../assets/FooterLink';
import FooterHelpers from '../assets/FooterHelpers';

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