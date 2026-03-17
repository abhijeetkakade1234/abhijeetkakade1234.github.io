import React from 'react';

const NewspaperLayout = ({ children, onNavigate }) => {
  const handleNavClick = (e, target) => {
    if (onNavigate) {
      if (target === 'archives') {
        e.preventDefault();
        onNavigate('archives');
      } else if (target === 'home') {
        e.preventDefault();
        onNavigate('home');
      }
    }
  };

  return (
    <div className="newspaper">
      <div className="content-wrap">
        <div className="topbar">
          <span className="topbar-motto">"All The News That's Fit To Code"</span>
          <span>✦ {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} ✦</span>
          <span className="topbar-price">Vol. VII, No. 42 &nbsp;·&nbsp; Est. 2019</span>
        </div>

        <header className="masthead">
          <div className="masthead-rule-top"></div>
          <div className="masthead-rule-thin"></div>
          <div className="masthead-flag" onClick={(e) => handleNavClick(e, 'home')} style={{ cursor: 'pointer' }}>
            The Portfolio Gazette
          </div>
          <div className="masthead-tagline">Dispatches from the Frontier of Digital Craft</div>
          <div className="masthead-meta">
            <span className="masthead-edition">Late City Edition</span>
            <span>— Published Every Sprint —</span>
            <span>Price: Your Attention</span>
          </div>
        </header>

        <nav className="navbar">
          <a href="#about" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'home')}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'archives')}>Archives</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'home')}>Experience</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'home')}>Contact</a>
        </nav>

        {children}

        <footer className="footer">
          <div className="footer-ornament">❧ ✦ ❧</div>
          <p>THE PORTFOLIO GAZETTE is published continuously. All rights reserved. Unauthorised reproduction of the developer's work is prohibited by common decency if not by law.</p>
          <div className="footer-ornament">─── ✦ ───</div>
          <p>Offices: Nashik, Maharashtra, India &nbsp;·&nbsp; Printed on Recycled Electrons &nbsp;·&nbsp; Est. 2019</p>
        </footer>
      </div>
    </div>
  );
};

export default NewspaperLayout;
