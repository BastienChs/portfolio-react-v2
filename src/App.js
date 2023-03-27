import './App.css';
import Main from "./components/shared/Main";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Experiences from "./components/Experiences";

function App() {
  return (
    <Main>
      <Hero/>
      <About/>
      <Experiences/>
      <Works/>
    </Main>
  );
}

export default App;
