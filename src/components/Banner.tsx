import React from 'react';
import { BannerContentContainer, BannerImage, BannerImageContainer, BannerSubTitle, BannerTitle } from '../styles/BannerStyles';
import BannerVideo from '../assets/media/banner.mp4';
import Button from '../assets/Button';
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset 
      - 260;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <BannerImageContainer role='bannerImageContainer' id='HOME'>
      <BannerImage src={BannerVideo} autoPlay loop muted />
      <BannerContentContainer>
        <BannerTitle role='title'>Welcome to 
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
        <Button 
        role='join' 
        onClick={() => handleScrollTo('CONTACT US')}       
        >Get in touch</Button>
      </BannerContentContainer>
    </BannerImageContainer>
  )
}

export default Banner