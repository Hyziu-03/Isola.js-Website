import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Author from "./components/Author"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Modules from "./components/Modules"

const firebaseConfig = {
  apiKey: "AIzaSyC6bxlow1yHkHpMSvpbmXiu76EXFNzD8Kw",
  authDomain: "isolajs.firebaseapp.com",
  projectId: "isolajs",
  storageBucket: "isolajs.appspot.com",
  messagingSenderId: "585967781854",
  appId: "1:585967781854:web:b3fdb9d192db0a21a43f4f",
  measurementId: "G-4G9F4EG4BM"
};

const app = initializeApp(firebaseConfig);

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
