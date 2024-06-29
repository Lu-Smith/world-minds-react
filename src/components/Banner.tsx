import React from 'react';
import styled from 'styled-components';
import BannerVideo from '../assets/media/banner.mp4';

const BannerImageContainer = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`;

const BannerImage = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Banner: React.FC = () => {
  return (
    <BannerImageContainer role='bannerImageContainer'>
      <BannerImage src={BannerVideo} autoPlay loop muted />
    </BannerImageContainer>
  )
}

export default Banner