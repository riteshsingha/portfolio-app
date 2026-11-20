import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import './styles/global.css';

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <>
      {/* Fixed background that stays in place while content scrolls */}
      <div 
        className="fixed-background"
        style={{
          backgroundImage: `url('/images/${theme === 'dark' ? 'dark-bg' : 'light-bg'}.svg')`
        }}
      />
      
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
