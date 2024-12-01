

import styles from './App.module.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Education } from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/projects';

function App() {
  
return (
  <>
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <Education/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      
       </div>;

    </>
)
}

export default App
