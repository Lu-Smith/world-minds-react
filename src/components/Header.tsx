import React from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import { BiWorld } from "react-icons/bi";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100vw;
  color: white;
  padding: 0 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    font-size: 30px;
    padding-top: 10px;
    color: #668ba4; 

    &:hover {
      color: #781E36;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.8em;
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
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 15px;
`;

const MenuLink = styled.li`
  letter-spacing: 1px;
  font-size: 0.8em;
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
          rld Minds
        </Title>
      </LogoContainer>
      <MenuContainer role='menuContainer'>
        <Menu data-testid='menu'>
          <MenuLink data-testid='about'>About</MenuLink>
          <MenuLink data-testid='discover'>Discover</MenuLink>
          <MenuLink data-testid='gallery'>Gallery</MenuLink>
          <MenuLink data-testid='contact'>Contact</MenuLink>
          <MenuLink><Button role='join'>Join</Button></MenuLink>
        </Menu>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header