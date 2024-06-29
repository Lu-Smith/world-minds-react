import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const FooterLinkElement = styled.a`
  color: #596e79; 
  padding: 0.4em 0.5em;
  text-decoration: none;
  transition: 200ms all ease;

  &:hover {
    color: black; 
  }
`;

interface FooterLinkProps {
  href: string;
  target: string;
  children: React.ReactNode;
  role?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, target, children, role }) => {
  return (
    <motion.div
    initial={{ scale: 1, opacity: 1, y: 0 }}
    whileHover={{ scale: 1.2, opacity: 0.8 }}
    transition={{ duration: 0.6 }}>
      <FooterLinkElement href={href} target={target} role={role}>
        {children}
      </FooterLinkElement>
    </motion.div>
  )
}

export default FooterLink