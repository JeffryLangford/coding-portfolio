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
          <li className={`${AboutSelected && 'navActive'}`}>
            <a 
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
          <li className={`${ContactSelected && 'navActive'}`}>
            <a 
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
          <li className={`${PortfolioSelected && 'navActive'}`}>
            <a 
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
          <li className={`${ResumeSelected && 'navActive'}`}>
            <a 
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
