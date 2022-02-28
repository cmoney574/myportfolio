
import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
