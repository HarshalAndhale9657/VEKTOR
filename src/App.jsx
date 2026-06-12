import { ThemeProvider, useTheme } from './context/ThemeContext';
import VektorNav from './components/VektorNav';
import VektorHero from './components/VektorHero';
import VektorServices from './components/VektorServices';
import VektorFooter from './components/VektorFooter';
import VektorStudio from './components/VektorStudio';
import VektorProcess from './components/VektorProcess';
import VektorPortfolio from './components/VektorPortfolio';
import VektorContact from './components/VektorContact';

function MainLayout() {
  const { currentTheme } = useTheme();

  return (
    <div id="top" style={{ 
      backgroundColor: currentTheme.base, 
      minHeight: '100vh', 
      color: currentTheme.primary,
      transition: 'background-color 0.3s ease, color 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden'
    }}>
      <VektorNav />

      <main style={{ flex: 1 }}> 
        <VektorHero />
        <VektorServices />
        <VektorProcess />
        <VektorPortfolio />
        <VektorStudio />
        <VektorContact />
      </main>

      <VektorFooter />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
