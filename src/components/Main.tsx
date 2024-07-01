import React from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import mainContent from '../assets/mainContent';

const SectorContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

const SectorSubTitle = styled.h2`
  color: #2b2b91;
  font-size: 2em;
`;

const SectorDescription = styled.p`
  font-size: 1em;
  text-align: left;
`;

const SectorImageContainer = styled.div`
  flex: 2;
`;

const SectorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Main: React.FC = () => {
  return (
    <div>
      {mainContent.map((content, index) => (
        <SectorContainer role='sector' key={index}>
          <SectorContentContainer >
            <SectorTitle>{content.title}</SectorTitle>
            <SectorSubTitle>{content.subtitle}</SectorSubTitle>
            <SectorDescription>{content.content}</SectorDescription>
            <Button role='button'>{content.button}</Button>
          </SectorContentContainer>
          <SectorImageContainer>
            <SectorImage src={content.src} alt={content.title} />
        </SectorImageContainer>
       </SectorContainer>
      ))}
    </div>
  )
}

export default Main