import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
