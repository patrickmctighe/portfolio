import React from 'react';
import SiteBody from './components/SiteBody';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './theme/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
    <ThemeProvider>
      <div>
        <Header />
        <SiteBody />
        <Footer />
      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;