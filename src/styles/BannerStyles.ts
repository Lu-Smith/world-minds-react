import styled from 'styled-components';

export const BannerImageContainer = styled.div`
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

export const BannerImage = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerContentContainer = styled.div`
  position: relative;
  top: -55%;
`;

export const BannerTitle = styled.h1`
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

export const BannerSubTitle = styled.h2`
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