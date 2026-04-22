'use client';
import React from 'react';
import Link from 'next/link';

const NewspaperLayout = ({ children }) => {
  return (
    <div className="newspaper">
      <div className="content-wrap">
        <div className="topbar">
          <span className="topbar-motto">&ldquo;All The News That&apos;s Fit To Code&rdquo;</span>
          <span>&#10022; {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} &#10022;</span>
          <span className="topbar-price">Vol. VII, No. 42 &nbsp;&middot;&nbsp; Est. 2019</span>
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
            <span>&mdash; Published Every Sprint &mdash;</span>
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
          <div className="footer-ornament">&#10087; &#10022; &#10087;</div>
          <p>THE PORTFOLIO GAZETTE is published continuously. All rights reserved. Unauthorised reproduction of the developer&apos;s work is prohibited by common decency if not by law.</p>
          <div className="footer-ornament">&#9472;&#9472;&#9472; &#10022; &#9472;&#9472;&#9472;</div>
          <p>Global Dispatch &nbsp;&middot;&nbsp; Printed on Recycled Electrons &nbsp;&middot;&nbsp; Est. 2019</p>
        </footer>
      </div>
    </div>
  );
};

export default NewspaperLayout;
