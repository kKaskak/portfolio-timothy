import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar, NavbarMobile } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <NavbarMobile />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer /> 
    </div>
  );
}

export default App;