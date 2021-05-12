import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div> 
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <Contact></Contact>
      <div>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
