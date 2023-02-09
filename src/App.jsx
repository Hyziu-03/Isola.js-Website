import Author from "./components/Author"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Modules from "./components/Modules"

// make sure the app is navigable with keyboard
// pass text as a prop to components 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Modules />
        <Author />
        <Buttons />
      </main>
      <Footer />
    </div>
  )
}

export default App
