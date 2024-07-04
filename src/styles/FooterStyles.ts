import styled from 'styled-components';

export const FooterText = styled.h4`
  font-size: 14px;
  padding: 1.5em 0;
  color: #668ba4; 
  font-family: "Playwrite US Modern", cursive;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;