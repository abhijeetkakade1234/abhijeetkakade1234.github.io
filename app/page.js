'use client';
import React from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SkillBox from '@/components/SkillBox';
import Timeline from '@/components/Timeline';
import data from '@/data/portfolioData.json';

export default function Home() {
  const { personalInfo, about, techStack, projects, experience, contact, quotes, publications, spotlight } = data;

  return (
    <>
      {/* FRONT PAGE - ABOUT */}
      <section className="page animated fadeIn" id="about">
        <div className="section-label" style={{ marginBottom: '18px' }}>
          <span className="section-label-rule"></span>
          <span className="section-label-text">Front Page &mdash; Late City Edition</span>
          <span className="section-label-rule"></span>
        </div>

        <div className="front-headline">
          <span className="kicker">{about.kicker}</span>
          <h1 className="headline-main">{about.headline}</h1>
          <div className="headline-byline">Written & Engineered by <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{personalInfo.name}</span></div>
          <p className="headline-deck">{about.deck}</p>

          <div className="hero-cta-box">
            <a href={personalInfo.cvUrl} download className="gazette-btn btn-primary" title="Download Official PDF">
              &#128196; View Full Record (Resume)
            </a>
            <a href="#contact" className="gazette-btn btn-secondary" title="Establish Correspondence">
              &#128233; Send Dispatch (Contact)
            </a>
          </div>
        </div>

        <div className="col-grid col-grid-3">
          <div className="col">
            <p className="byline">{about.byline}</p>
            <p className="body-text dropcap">{about.body[0]}</p>
            <p className="body-text">{about.body[1]}</p>
            <div className="notices-box" data-title="At A Glance">
              <div className="skill-row"><span>Open to Work</span><span style={{ color: 'var(--accent)' }}>{personalInfo.openToWork ? '\u2713 Yes' : 'No'}</span></div>
              <div className="skill-row"><span>Location</span><span>{personalInfo.location}</span></div>
              <div className="skill-row"><span>Education</span><span>{personalInfo.education}</span></div>
              <div className="skill-row"><span>Role</span><span>{personalInfo.currentRole}</span></div>
            </div>
          </div>
          <div className="col-divider"></div>
          <div className="col" style={{ textAlign: 'center' }}>
            <div className="avatar-frame">
              <img src={personalInfo.avatarGif} alt={personalInfo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p className="subhead" style={{ marginBottom: '4px' }}>{personalInfo.name}</p>
            <p style={{ fontFamily: "'IM Fell English', serif", fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '8px', color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '0.01em', textTransform: 'uppercase' }}>
              {personalInfo.powerLine}
            </p>
            <p style={{ fontFamily: "'IM Fell English', serif", fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '12px', opacity: 0.8 }}>{personalInfo.role}</p>

            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">{projects.length}+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{personalInfo.studentsImpacted}</span>
                <span className="stat-label">Users Impacted</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{personalInfo.awards + personalInfo.hackathons}</span>
                <span className="stat-label">{(personalInfo.awards + personalInfo.hackathons) > 1 ? 'Wins & Honors' : 'Major Win'}</span>
              </div>
            </div>

            <div className="pull-quote">
              <p>&ldquo;{quotes[0].text}&rdquo;</p>
              <cite>&mdash; {quotes[0].author}</cite>
            </div>
          </div>
          <div className="col-divider"></div>
          <div className="col">
            <p className="subhead">{publications.blogsTitle}</p>
            <div className="dispatches-list">
              {publications.recentDispatches.map((dispatch, idx) => (
                <a key={idx} href={dispatch.url} target="_blank" rel="noreferrer" className="dispatch-item" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <p className="dispatch-title">{dispatch.title}</p>
                  <p className="dispatch-insight">{dispatch.insight}</p>
                </a>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>
              <a href={publications.url} target="_blank" rel="noreferrer" className="project-link">Read Full Periodicals &rarr;</a>
            </div>
            <div className="news-brief">
              <p className="news-brief-label">{spotlight.label}</p>
              <p className="subhead" style={{ marginBottom: '8px' }}>{spotlight.title}</p>
              <p className="body-text" style={{ marginBottom: '10px' }}>{spotlight.body}</p>
            </div>
            <div className="photo-box">
              <img src="/pitch.jpeg" alt="Abhijeet Kakade pitching AVAXVERSE at Avalanche Team1 City Connect Nashik" />
              <p className="photo-caption">{spotlight.caption}</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-break-thick" />

      {/* PAGE TWO - SKILLS & PROJECTS PREVIEW */}
      <section className="page animated fadeIn" id="skills" style={{ paddingTop: '22px' }}>
        <div className="section-label" style={{ marginBottom: '18px' }}>
          <span className="section-label-rule"></span>
          <span className="section-label-text">Skills & Repertoire</span>
          <span className="section-label-rule"></span>
        </div>

        <h2 className="headline-main" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '14px' }}>
          Comprehensive Catalogue of Technical Abilities Presented for Public Inspection
        </h2>

        <div className="col-grid col-grid-3">
          <div className="col">
            <p className="subhead">Front-End Arts</p>
            <SkillBox title="Client-Side" skills={techStack.slice(0, 1)} />
            <p className="body-text">Mastery over the modern web&apos;s most powerful libraries, with an emphasis on seamless state management and vintage aesthetics.</p>
          </div>
          <div className="col-divider"></div>
          <div className="col">
            <p className="subhead">Web3 Sciences</p>
            <SkillBox title="Smart Contracts" skills={techStack.slice(1, 2)} />
            <p className="body-text">Engineering trustless systems and secure protocols for the next generation of the internet.</p>
          </div>
          <div className="col-divider"></div>
          <div className="col">
            <p className="subhead">Digital Intelligence</p>
            <SkillBox title="AI Insights" skills={techStack.slice(3, 4)} />
            <p className="body-text">Bridging the gap between LLM agents and on-chain execution for autonomous experiences.</p>
          </div>
        </div>
      </section>

      <hr className="section-break-thick" />

      {/* PAGE THREE - MARKET DISPATCHES (PROJECTS PREVIEW) */}
      <section className="page animated fadeIn" id="projects">
        <div className="section-label" style={{ marginBottom: '18px' }}>
          <span className="section-label-rule"></span>
          <span className="section-label-text">Market Dispatches & Advertisements</span>
          <span className="section-label-rule"></span>
        </div>

        <h2 className="headline-main" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '6px' }}>Selected Projects of Public Interest</h2>
        <p style={{ textAlign: 'center', fontFamily: "'IM Fell English', serif", fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '20px', opacity: 0.7 }}>A curated examination of enterprises undertaken in the public interest</p>

        <div className="col-grid col-grid-3">
          {projects.slice(0, 3).map((p, i) => (
            <React.Fragment key={p.slug}>
              <div className="col">
                <ProjectCard {...p} onReadMore={() => {}} />
              </div>
              {i < 2 && <div className="col-divider"></div>}
            </React.Fragment>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link href="/archives" className="project-link" style={{ fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
            View The Full Project Catalogue (Sheet III) &rarr;
          </Link>
        </div>
      </section>

      <hr className="section-break-thick" />

      {/* PAGE FOUR - EXPERIENCE & CONTACT */}
      <section className="page animated fadeIn" id="experience">
        <div className="section-label" style={{ marginBottom: '18px' }}>
          <span className="section-label-rule"></span>
          <span className="section-label-text">Historical Record & Classifieds</span>
          <span className="section-label-rule"></span>
        </div>

        <div className="col-grid col-grid-2">
          <div className="col">
            <h2 className="headline-main" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>A Chronology of Professional Endeavours</h2>
            <Timeline items={experience} onReadMore={() => {}} />
          </div>
          <div className="col-divider"></div>
          <div className="col" id="contact">
            <p className="subhead">Establish Correspondence</p>
            <div className="classifieds-grid">
              <a className="classified" href={`mailto:${contact.email}`}>
                <span className="classified-icon">&#9993;</span>
                <span className="classified-title">Electronic Mail</span>
                {contact.email}
              </a>
              <a className="classified" href={contact.github} target="_blank" rel="noreferrer">
                <span className="classified-icon">GH</span>
                <span className="classified-title">GitHub Archives</span>
                Check Repositories
              </a>
              <a className="classified" href={contact.linkedin} target="_blank" rel="noreferrer">
                <span className="classified-icon">in</span>
                <span className="classified-title">LinkedIn Ledger</span>
                Professional Network
              </a>
              <a className="classified" href={contact.twitter} target="_blank" rel="noreferrer">
                <span className="classified-icon">X</span>
                <span className="classified-title">The X Dispatch</span>
                Latest Transmissions
              </a>
              <a className="classified" href={personalInfo.cvUrl} download>
                <span className="classified-icon">&#128196;</span>
                <span className="classified-title">Curriculum Vitae</span>
                Download PDF
              </a>
              <Link className="classified" href="/photography" style={{ width: '100%' }}>
                <span className="classified-icon">&#128248;</span>
                <span className="classified-title">Sunday Supplement</span>
                Mobile Photography
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA DISPATCH */}
      <section className="page animated fadeIn" style={{ paddingBottom: '60px' }}>
        <div className="footer-cta-box" style={{ borderTop: '3px double var(--ink)', paddingTop: '40px', textAlign: 'center' }}>
          <p className="subhead" style={{ marginBottom: '24px', fontSize: '1.6rem' }}>Official Correspondence & Records</p>
          <div className="hero-cta-box" style={{ justifyContent: 'center', marginTop: 0, gap: '20px' }}>
            <a href={personalInfo.cvUrl} download className="gazette-btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>
              &#128196; Download Full CV (PDF)
            </a>
            <a href="#about" className="gazette-btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>
              &larr; Return to Masthead
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
