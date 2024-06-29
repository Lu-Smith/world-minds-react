import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {

  return (
    <div className="App">
      <div role="banner">
        <Header />
      </div>
      <div role="main">
        <Main />
      </div>
      <div role="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
