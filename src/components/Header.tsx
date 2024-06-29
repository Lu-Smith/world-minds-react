import React from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import { BiWorld } from "react-icons/bi";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

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
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.ul`
  color: black; 
  text-align: left;
  font-family: "Playwrite US Modern", cursive;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 10px;
`;

const MenuLink = styled.li`
  letter-spacing: 1px;
  font-size: 1.2em;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer role='logoContainer'>
        <Title data-testid='logo1'>
          W
        </Title>
        <div><BiWorld /></div>
        <Title data-testid='logo2'>
          orld Minds
        </Title>
      </LogoContainer>
      <MenuContainer role='menuContainer'>
        <Menu data-testid='menu'>
          <MenuLink data-testid='about'>About</MenuLink>
          <MenuLink data-testid='discover'>Discover</MenuLink>
          <MenuLink data-testid='gallery'>Gallery</MenuLink>
          <MenuLink data-testid='contact'>Contact</MenuLink>
        </Menu>
      </MenuContainer>
      <Button role='join'>Join</Button>
    </HeaderContainer>
  )
}

export default Header