import Author from "./components/Author"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Modules from "./components/Modules"

// Consider all edge cases 

function App() {
  return (
    <div className="App">
      <Header
        heading={"Isola.js"}
        subheader={"A web development oriented multi purpose JavaScript library"}
      />
      <main>
        <Modules
          subheading={"What can Isola.js do?"}
        />
        <Author
          subheading={"Who created Isola.js?"}
          paragraphs={[
            "My name is Szymon, I am a 19-year-old frontend developer specializing in React.js and Figma.",
            "I am also a co-founder of HOMIES, an edu-tech startup."
          ]}
        />
        <Buttons
          pkg={"Download package"}
          documentation={"Read documentation"}
        />
      </main>
      <Footer
        text={"Szymon Hyziak © 2022-2023 - Isola.js - A web development oriented multi purpose JavaScript library"}
      />
    </div>
  )
}

export default App
