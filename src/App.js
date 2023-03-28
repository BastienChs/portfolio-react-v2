import './App.css';
import Main from "./components/shared/Main";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {
  return (
    <Main>
      <Hero/>
      <About/>
      <Experiences/>
      <Works/>
      <Contact/>
    </Main>
  );
}

export default App;
