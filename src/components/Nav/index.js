import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    setAboutSelected,
    setContactSelected,
    setPortfolioSelected,
    setResumeSelected,
    AboutSelected,
    ContactSelected,
    PortfolioSelected,
    ResumeSelected
  } = props;

  return (
    <header className="flex-row">
      <h1>Jeffry Langford</h1>
      <nav>
        <ul className="flex-row">
          <li key="about">  
            <a 
              className={`${AboutSelected && 'navActive'}`}
              data-testid="about" 
              href="#about" 
              onClick={() => {
                  setAboutSelected(true);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                  }}
            >About</a>
          </li>
          <li key="contact">
            <a 
              className={`${ContactSelected && 'navActive'}`}
              data-testid="contact" 
              href="#contact" 
              onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(true);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                  }}
            >Contact</a>
          </li>
          <li key="portfolio">
            <a 
              className={`${PortfolioSelected && 'navActive'}`}
              data-testid="portfolio" 
              href="#portfolio" 
              onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(true);
                  setResumeSelected(false);
                  }}
            >Portfolio</a>
          </li>
          <li key="resume">
            <a 
              className={`${ResumeSelected && 'navActive'}`}
              data-testid="resume" 
              href="#resume" 
              onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(true);
                  }}
            >Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
