import styled from 'styled-components';

export const SectorContainer = styled.div<{ $reverse?: boolean }>`
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

export const SectorContentContainer = styled.div`
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

export const SectorTitle = styled.h2`
  color: #668ba4;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const SectorSubTitle = styled.h2<{ $reverse?: boolean }>`
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

export const SectorDescription = styled.p`
  font-size: 1em;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const SectorImageContainer = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const SectorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;