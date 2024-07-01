import React from 'react';
import styled from 'styled-components';
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
  } from "react-icons/fa";
import FooterLink from './FooterLink';

const SocialMediaContainer = styled.div`
  color: #596e79;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-size: 20px;
  margin: 10px 0;
`;

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaContainer role='socialMedia'>
      <FooterLink href="//www.facebook.com/lunasmithart" target="_blank" aria-label="Facebook page" role="facebook" >
        <FaFacebook />
      </FooterLink>
      <FooterLink href="//twitter.com/LuArtGallery" target="_blank" aria-label="Twitter page" role="twitter" >
        <FaTwitter />
      </FooterLink>
      <FooterLink href="//www.instagram.com/luartgallery" target="_blank" aria-label="Instagram page" role="instagram" >
        <FaInstagram />
      </FooterLink>
    </SocialMediaContainer>
  )
}

export default SocialMedia