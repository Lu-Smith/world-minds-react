import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import { BiWorld } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.div<{ $isBlackBackground: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100vw;
  color: white;
  padding: 10px 30px;
  background-color: ${(props) => (props.$isBlackBackground ? 'black' : 'transparent')};

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
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

    @media (max-width: 480px) {
      font-size: 15px;
      padding-top: 0px;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.8em;
  text-align: left;
  font-family: "Playwrite US Modern", cursive;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.ul`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const MenuLink = styled.li<{ $isActive: boolean }>`
  letter-spacing: 1px;
  font-size: 0.8em;
  transition: 400ms all ease-out;
  border-bottom: ${(props) => (props.$isActive ? '2px solid #2b2b91' : 'none')};
  padding-bottom: ${(props) => (props.$isActive ? '10px' : '0')};
  color: ${(props) => (props.$isActive ? 'rgba(250, 250, 250, 0.8)' : 'inherit')};
  
  &:hover {
    border-bottom: 2px solid #2b2b91;
    padding-bottom: 10px;
    color: rgba(250, 250, 250, 0.8);
  }

  &:hover.joinButton {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.7em;
  }

  @media (max-width: 480px) {
    font-size: 0.6em;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(Menu)<{ open: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 80px;
    right: 0;
    left: 0;
    background-color: black;
    width: 100%;
    max-width: 250px;
    padding: 20px;
    transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-150%)')};
    transition: transform 0.3s ease-in-out;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 0 auto;
    }
`;

const Header: React.FC = () => {
  const [linkUnderline, setLinkUnderline] = useState<string>('');
  const [isBlackBackground, setIsBlackBackground] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset 
      - 300;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }

    setMenuOpen(false);
    updateLinkUnderline(id);  
  };

  const updateLinkUnderline = (id: string) => {
    if (id === 'INVEST IN MINDS') {
      setLinkUnderline('about');
      setIsBlackBackground(true);
    } else if (id === 'SUSTAINABLE FUTURE') {
      setLinkUnderline('invest');
      setIsBlackBackground(true);
    } else if (id === 'TECHNOLOGY ADVANCEMENT') {
      setLinkUnderline('technology');
      setIsBlackBackground(true);
    } else if (id === 'CONTACT US') {
      setLinkUnderline('contact');
      setIsBlackBackground(true);
    } else if (id === 'EXPLORE NEW IDEAS') {
      setLinkUnderline('explore');
      setIsBlackBackground(true);
    } else if (id === 'PERSONAL GROWTH') {
      setLinkUnderline('personal');
      setIsBlackBackground(true);
    } else if (id === 'COLLABORATE AND GROW') {
      setLinkUnderline('colaborate');
      setIsBlackBackground(true);
    } else if (id === 'Home') {
      setIsBlackBackground(false);
    } else {
      setLinkUnderline('');
      setIsBlackBackground(false);
    } 
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      let currentSection = '';
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
  
      updateLinkUnderline(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer
    $isBlackBackground={isBlackBackground === true}>
      <LogoContainer role='logoContainer'>
        <Title data-testid='logo1'>
          W
        </Title>
        <motion.div
          initial={{opacity: 0, y: -100, scale: 1}}
          animate={{opacity: 1, y: 0}}
          whileHover={{scale: 0.5}}
          transition={{duration: 1}}
          onClick={() => handleScrollTo('HOME')}
        >
          <BiWorld />
        </motion.div>
        <Title data-testid='logo2'>
          rld Minds
        </Title>
      </LogoContainer>
      <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <MenuContainer role='menuContainer'>
        <Menu data-testid='menu'>
          <MenuLink 
          data-testid='about'  
          onClick={() => handleScrollTo('INVEST IN MINDS')}
          $isActive={linkUnderline === 'about'}>
            About
          </MenuLink>
          <MenuLink 
          data-testid='invest' 
          onClick={() => handleScrollTo('SUSTAINABLE FUTURE')}
          $isActive={linkUnderline === 'invest'}>
            Invest
          </MenuLink>
          <MenuLink 
          data-testid='technology' 
          onClick={() => handleScrollTo('TECHNOLOGY ADVANCEMENT')}
          $isActive={linkUnderline === 'technology'}>
            Technology
          </MenuLink>
          <MenuLink 
          data-testid='contact'
          onClick={() => handleScrollTo('CONTACT US')}
          $isActive={linkUnderline === 'contact'}>
            Contact
          </MenuLink>
          <MenuLink 
          className='joinButton' 
          onClick={() => handleScrollTo('COLLABORATE AND GROW')}
          $isActive={linkUnderline === 'join'}>
            <Button role='join' type='button'>Join</Button>
          </MenuLink>
        </Menu>
        </MenuContainer>
        <MobileMenu open={menuOpen}>
          <MenuLink
            data-testid="about"
            onClick={() => handleScrollTo('INVEST IN MINDS')}
            $isActive={linkUnderline === 'about'}
          >
            About
          </MenuLink>
          <MenuLink
            data-testid="invest"
            onClick={() => handleScrollTo('SUSTAINABLE FUTURE')}
            $isActive={linkUnderline === 'invest'}
          >
            Invest
          </MenuLink>
          <MenuLink
            data-testid="technology"
            onClick={() => handleScrollTo('TECHNOLOGY ADVANCEMENT')}
            $isActive={linkUnderline === 'technology'}
          >
            Technology
          </MenuLink>
          <MenuLink
            data-testid="contact"
            onClick={() => handleScrollTo('CONTACT US')}
            $isActive={linkUnderline === 'contact'}
          >
            Contact
          </MenuLink>
          <MenuLink
            className="joinButton"
            onClick={() => handleScrollTo('COLLABORATE AND GROW')}
            $isActive={linkUnderline === 'join'}
          >
            <Button role="join" type="button">Join</Button>
          </MenuLink>
        </MobileMenu>
  
    </HeaderContainer>
  )
}

export default Header