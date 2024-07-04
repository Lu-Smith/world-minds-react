import React from 'react';
import { SectorContainer, SectorContentContainer, SectorDescription, SectorImage, SectorImageContainer, SectorSubTitle, SectorTitle } from '../styles/MainStyles';
import Button from '../assets/Button';
import mainContent from '../assets/mainContent';
import { motion } from "framer-motion";
import ContactForm from '../assets/ContactForm';

const Main: React.FC = () => {
  return (
    <>
      {mainContent.map((content, index) => (
        <motion.div key={index} 
          initial={{opacity: 0, scale: 0.5}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1}}
        >
          <SectorContainer 
          role='sector' 
          $reverse={index % 2 === 1 ? true : undefined} 
          id={content.title} 
          className={content.src ? '' : 'formContainer'}>
              <SectorContentContainer className={content.src ? '' : 'formContentContainer'}>
                <SectorTitle>{content.title}</SectorTitle>
                <SectorSubTitle 
                className={content.src ? '' : 'subtitleForm'}
                $reverse={index % 2 === 1 ? true : undefined}>
                  {content.subtitle}
                </SectorSubTitle>
                <SectorDescription>{content.content}</SectorDescription>
                {content.src ? 
                <Button role='button'>{content.button}</Button> : 
                ''
                }
              </SectorContentContainer>
              {content.src ? 
              <SectorImageContainer>
                  <SectorImage src={content.src} alt={content.title} />
              </SectorImageContainer> : 
              <ContactForm/>
              }
              
          </SectorContainer>
        </motion.div>
      ))}
    </>
  )
}

export default Main