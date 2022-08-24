import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [AboutSelected, setAboutSelected] = useState(false);
  const [ContactSelected, setContactSelected] = useState(false);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [ResumeSelected, setResumeSelected] = useState(false);
  const NothingSelected = !AboutSelected && !ContactSelected && !PortfolioSelected && !ResumeSelected;

  return (
    <div>
      <Nav 
        setAboutSelected={setAboutSelected}      
        setContactSelected={setContactSelected}
        setPortfolioSelected={setPortfolioSelected}
        setResumeSelected={setResumeSelected}

        AboutSelected={AboutSelected}
        ContactSelected={ContactSelected}
        PortfolioSelected={PortfolioSelected}
        ResumeSelected={ResumeSelected}
      ></Nav>
      <main>
        {NothingSelected && ( <About />)}
        {AboutSelected && ( <About /> )}
        {ContactSelected && ( <Contact /> )}
        {PortfolioSelected && ( <Portfolio /> )}
        {ResumeSelected && ( <Resume /> )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
