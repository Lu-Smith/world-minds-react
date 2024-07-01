import React from 'react';
import styled from 'styled-components';

const SectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  width: 90vw;
  color: white;
  padding: 0 30px;
  margin: 0 auto;
`;

const Main: React.FC = () => {
  return (
    <SectorContainer role='sector'>
      Main
    </SectorContainer>
  )
}

export default Main