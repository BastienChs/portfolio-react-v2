import './App.css';
import '@picocss/pico';
import Main from "./components/shared/Main";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <Main>
      <Hero/>
      <About/>
    </Main>
  );
}

export default App;
