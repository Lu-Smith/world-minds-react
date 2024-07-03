import React from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import mainContent from '../assets/mainContent';
import { motion } from "framer-motion";
import ContactForm from '../assets/ContactForm';

const SectorContainer = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
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
  background: ${({ $reverse }) => ($reverse ? '#233142' : 'none')};

  &.formContainer {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: ${({ $reverse }) => ($reverse ? 'column-reverse' : 'column')};
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

  &.formContentContainer {
    align-items: center;
  }
`;

const SectorTitle = styled.h2`
  color: #668ba4;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const SectorSubTitle = styled.h2<{ $reverse?: boolean }>`
  color: ${({ $reverse }) => ($reverse ? 'black' : '#2b2b91')};
  font-size: 2em;
  text-align: left;

  &.subtitleForm {
    font-size: 0.8em;
    font-style: italic;
    color: #781E36;
  }

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
          <SectorContainer 
          role='sector' 
          $reverse={index % 2 === 1 ? true : undefined} 
          id={content.title} 
          className={content.src ? '' : 'formContainer'}>
              <SectorContentContainer className={content.src ? '' : 'formContentContainer'}>
                <SectorTitle>{content.title}</SectorTitle>
                <SectorSubTitle 
                className={content.src ? '' : 'subtitleForm'}
                $reverse={index % 2 === 1 ? true : undefined}>
                  {content.subtitle}
                </SectorSubTitle>
                <SectorDescription>{content.content}</SectorDescription>
                {content.src ? 
                <Button role='button'>{content.button}</Button> : 
                ''
                }
              </SectorContentContainer>
              {content.src ? 
              <SectorImageContainer>
                  <SectorImage src={content.src} alt={content.title} />
              </SectorImageContainer> : 
              <ContactForm/>
              }
              
          </SectorContainer>
        </motion.div>
      ))}
    </>
  )
}

export default Main