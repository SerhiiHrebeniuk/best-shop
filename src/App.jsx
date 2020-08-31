import React from 'react';

import Header from './components/header/Header';
import Statistics from './components/statistics/Statistics';
import Benefits from './components/benefits/Benefits';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Statistics />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
