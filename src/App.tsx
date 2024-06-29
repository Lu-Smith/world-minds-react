import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

const App: React.FC = () => {

  return (
    <div className="App">
      <div role="bannerContainer">
        <Header />
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
