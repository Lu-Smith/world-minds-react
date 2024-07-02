import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const FooterLinkElement = styled.a`
  color: #e3e3e3;
  padding: 0.4em 0.5em;
  text-decoration: none;
  transition: 200ms all ease;
  cursor: pointer;
  font-size: 1.2em;

  &:hover {
    color: #668ba4; 
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

interface FooterLinkProps {
  href: string;
  target: string;
  children: React.ReactNode;
  role?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, target, children, role }) => {

  const [hoverY, setHoverY] = useState(-15);  

  useEffect(() => {
    const updateHoverY = () => {
      if (window.innerWidth <= 768) {
        setHoverY(-8);
      } else {
        setHoverY(-15);
      }
    };

    updateHoverY();
    window.addEventListener('resize', updateHoverY);

    return () => window.removeEventListener('resize', updateHoverY);
  }, []);

  return (
    <motion.div
    initial={{ scale: 1, y: 0, opacity: 1 }}
    whileHover={{ scale: 1.2, y: hoverY, opacity: 0.9 }}
    transition={{ duration: 0.6 }}>
      <FooterLinkElement href={href} target={target} role={role}>
        {children}
      </FooterLinkElement>
    </motion.div>
  )
}

export default FooterLink