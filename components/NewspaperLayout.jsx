'use client';
import React from 'react';
import Link from 'next/link';

const NewspaperLayout = ({ children }) => {
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
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div className="masthead-flag" style={{ cursor: 'pointer' }}>
              The Portfolio Gazette
            </div>
          </Link>
          <div className="masthead-tagline">Dispatches from the Frontier of Digital Craft</div>
          <div className="masthead-meta">
            <span className="masthead-edition">Late City Edition</span>
            <span>— Published Every Sprint —</span>
            <span>Price: Your Attention</span>
          </div>
        </header>

        <nav className="navbar">
          <Link href="/#about">Home</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/archives">Archives</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        {children}

        <footer className="footer">
          <div className="footer-ornament">❧ ✦ ❧</div>
          <p>THE PORTFOLIO GAZETTE is published continuously. All rights reserved. Unauthorised reproduction of the developer's work is prohibited by common decency if not by law.</p>
          <div className="footer-ornament">─── ✦ ───</div>
          <p>Global Dispatch &nbsp;·&nbsp; Printed on Recycled Electrons &nbsp;·&nbsp; Est. 2019</p>
        </footer>
      </div>
    </div>
  );
};

export default NewspaperLayout;

