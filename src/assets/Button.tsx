import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const ButtonElement = styled.button`
	background: #2b2b91;
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
`;


const Button: React.FC<{  onClick?: () => void, children: string, role: string }> = ({ onClick, children, role }) => {
  return (
    <motion.div
           initial={{ scale: 1, opacity: 1 }}
           whileHover={{ scale: 0.9, opacity: 0.8 }}
           transition={{ duration: 0.6 }}>
      <ButtonElement onClick={onClick} role={role}>{children}</ButtonElement>
    </motion.div>
  )
}

export default Button