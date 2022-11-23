
import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Project'
import Contact from './components/Contact'
import Companies from './components/Companies';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <AboutMe />
      <Projects />
      <Companies />
      <Contact/>
    </div>
  );
}

export default App;
