import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../assets/Button';

const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px 20px;
  background: #233142;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

const Textarea = styled(motion.textarea)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  resize: none;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // handle the form submission
  };

  return (
    <FormContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          whileFocus={{ scale: 1.05 }}
        />
        <Button role='join' type="submit">Send Message</Button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;