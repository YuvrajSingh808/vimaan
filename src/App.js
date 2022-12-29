import Hero from './components/Hero';
import Feature from './components/Feature';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import MailingList from './components/MailingList';
import Team from './components/Team';
import Statistic from './components/Statistic';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}  `}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className='w-full px-[10%] dark:bg-black'>
        <Hero />
        <Feature />
        <Statistic />
        <Gallery />
        <Contact />
        <MailingList />
        <Team members={[{ name: 'John Doe' }, { name: 'Jane Doe' }]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
