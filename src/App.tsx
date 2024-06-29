import React from 'react';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";



const App: React.FC = () => {

  return (
    <div className="App">
      <div role="headerContainer">
        <Header />
      </div>
      <div role="bannerContainer">
        <Banner />
      </div>
      <div role="mainContainer">
        <Main />
      </div>
      <div role="footerContainer">
        <Footer />
      </div>
    </div>
  )
}

export default App
