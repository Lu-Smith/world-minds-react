import React, { useState, useEffect } from 'react';
import { HeaderContainer, LogoContainer, Title, MenuContainer, Menu, MenuLink, HamburgerIcon, MobileMenu } from '../styles/HeaderStyles';
import Button from '../assets/Button';
import { BiWorld } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';



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
            data-testid="mobile-about"
            onClick={() => handleScrollTo('INVEST IN MINDS')}
            $isActive={linkUnderline === 'about'}
          >
            About
          </MenuLink>
          <MenuLink
            data-testid="mobile-invest"
            onClick={() => handleScrollTo('SUSTAINABLE FUTURE')}
            $isActive={linkUnderline === 'invest'}
          >
            Invest
          </MenuLink>
          <MenuLink
            data-testid="mobile-technology"
            onClick={() => handleScrollTo('TECHNOLOGY ADVANCEMENT')}
            $isActive={linkUnderline === 'technology'}
          >
            Technology
          </MenuLink>
          <MenuLink
            data-testid="mobile-contact"
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