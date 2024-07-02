import React from 'react';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { motion, useScroll } from "framer-motion";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div role="headerContainer" className='headerContainer'
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
      >
        <Header />
      </motion.div>
      <div role="bannerContainer">
        <Banner />
      </div>
      <div role="mainContainer">
        <Main />
      </div>
      <motion.div role="footerContainer"
       initial={{opacity: 0, y: 100}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration: 1}}>
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
