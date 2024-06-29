import React from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import { BiWorld } from "react-icons/bi";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.8em;
  color: black; 
  text-align: left;
  font-family: "Playwrite US Modern", cursive;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Header: React.FC = () => {
  return (
    <div>
      <LogoContainer role='logoContainer'>
        <Title data-testid='logo'>
          W<div><BiWorld /></div>orld Minds
        </Title>
      </LogoContainer>
      <Button>Button</Button>
    </div>
  )
}

export default Header