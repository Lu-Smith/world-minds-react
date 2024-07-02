import React from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import mainContent from '../assets/mainContent';
import { motion } from "framer-motion";

const SectorContainer = styled.div<{ reverse?: string }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  width: 90vw;
  height: 600px;
  color: white;
  padding: 0 30px;
  margin: 0 auto;
  border: 2px solid #668ba4;
  border-radius: 20px;
  margin-bottom: 20px;
  background: ${({ reverse }) => (reverse ? '#233142' : 'none')};

  @media (max-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
    height: auto; 
    padding: 40px;
  }
`;

const SectorContentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
`;

const SectorTitle = styled.h2`
  color: #668ba4;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const SectorSubTitle = styled.h2<{ reverse?: string }>`
  color: ${({ reverse }) => (reverse ? 'black' : '#2b2b91')};
  font-size: 2em;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.6em;
  }
`;

const SectorDescription = styled.p`
  font-size: 1em;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const SectorImageContainer = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const SectorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Main: React.FC = () => {
  return (
    <>
      {mainContent.map((content, index) => (
        <motion.div key={index} 
          initial={{opacity: 0, scale: 0.5}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1}}
        >
          <SectorContainer role='sector' reverse={index % 2 === 1 ? true.toString() : undefined}>
              <SectorContentContainer >
                <SectorTitle>{content.title}</SectorTitle>
                <SectorSubTitle reverse={index % 2 === 1 ? true.toString() : undefined}>{content.subtitle}</SectorSubTitle>
                <SectorDescription>{content.content}</SectorDescription>
                <Button role='button'>{content.button}</Button>
              </SectorContentContainer>
              <SectorImageContainer>
                <SectorImage src={content.src} alt={content.title} />
            </SectorImageContainer>
          </SectorContainer>
        </motion.div>
       
      ))}
    </>
  )
}

export default Main