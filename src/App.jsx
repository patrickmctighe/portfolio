import React from 'react';
import SiteBody from './components/SiteBody';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <SiteBody />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;