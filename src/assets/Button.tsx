import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const ButtonElement = styled.button`
	background: #668ba4; 
  color: #f0ece2;
  font-size: 0.9em;
  padding: 0.8em 1.2em;
  margin: 0.5em;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  transition: 200ms all ease;
  letter-spacing: 2px;

  &:hover {
    background: #781E36;
  }

  @media (max-width: 768px) {
    font-size: 0.7em;
    padding: 0.8em 1.6em;
    letter-spacing: 1px;
  }

   @media (max-width: 480px) {
    font-size: 0.6em;
    padding: 0.7em 1.5em;
  }
`;

interface ButtonProps {
  onClick?: () => void;
  children: string;
  role?: string;
  type?: 'button' | 'submit' | 'reset';
}


const Button: React.FC<ButtonProps> = ({ onClick, children, role, type }) => {
  return (
    <motion.div
           initial={{ scale: 1, opacity: 1 }}
           whileHover={{ scale: 0.9, opacity: 0.8 }}
           transition={{ duration: 0.6 }}>
      <ButtonElement onClick={onClick} role={role} type={type} >{children}</ButtonElement>
    </motion.div>
  )
}

export default Button