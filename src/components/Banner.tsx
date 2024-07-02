import React from 'react';
import styled from 'styled-components';
import BannerVideo from '../assets/media/banner.mp4';
import Button from '../assets/Button';
import { motion } from "framer-motion";

const BannerImageContainer = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    pointer-events: none;
  }
`;

const BannerImage = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerContentContainer = styled.div`
  position: relative;
  top: -55%;
`;

const BannerTitle = styled.h1`
  font-size: 1.8em;
  font-family: "Playwrite US Modern", cursive;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #668ba4; 
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const BannerSubTitle = styled.h2`
  font-size: 1.2em;
  letter-spacing: 1px;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;


const Banner: React.FC = () => {
  return (
    <BannerImageContainer role='bannerImageContainer'>
      <BannerImage src={BannerVideo} autoPlay loop muted />
      <BannerContentContainer>
        <BannerTitle>Welcome to 
          <span>
            World 
            <motion.div
              initial={{opacity: 0, x: 30, y: -30, scale: 1}}
              whileInView={{opacity: 1, x: 0, y: 0}}
              whileHover={{scale: 1.2}}
              transition={{duration: 1}}
            >Minds</motion.div>
          </span>
        </BannerTitle>
        <BannerSubTitle>Open your mind and find yourself</BannerSubTitle>
        <Button role='join'>Get in touch</Button>
      </BannerContentContainer>
    </BannerImageContainer>
  )
}

export default Banner