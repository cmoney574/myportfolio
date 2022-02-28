import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Project'

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
