import React, { useState } from 'react';
import NewspaperLayout from './components/NewspaperLayout';
import ProjectCard from './components/ProjectCard';
import SkillBox from './components/SkillBox';
import Timeline from './components/Timeline';
import ProjectDetail from './components/ProjectDetail';
import SundaySupplement from './components/SundaySupplement';
import ProjectArchives from './components/ProjectArchives';
import data from './data/portfolioData.json';

function App() {
  const { personalInfo, about, techStack, projects, experience, contact, quotes, publications, photography } = data;
  const [view, setView] = useState({ type: 'home', data: null });

  const handleReadMore = (project) => {
    setView({ type: 'project', data: project });
    window.scrollTo(0, 0);
  };

  const handlePhotography = () => {
    setView({ type: 'photography', data: photography });
    window.scrollTo(0, 0);
  };

  const handleArchives = () => {
    setView({ type: 'archives', data: projects });
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setView({ type: 'home', data: null });
    window.scrollTo(0, 0);
  };

  const handleNavigate = (target) => {
    if (target === 'archives') handleArchives();
    else handleBack();
  };

  return (
    <NewspaperLayout onNavigate={handleNavigate}>
      {view.type === 'home' ? (
        <>
          {/* FRONT PAGE - ABOUT */}
          <section className="page animated fadeIn" id="about">
            <div className="section-label" style={{ marginBottom: '18px' }}>
              <span className="section-label-rule"></span>
              <span className="section-label-text">Front Page — Late City Edition</span>
              <span className="section-label-rule"></span>
            </div>

            <div className="front-headline">
              <span className="kicker">{about.kicker}</span>
              <h1 className="headline-main">{about.headline}</h1>
              <p className="headline-deck">{about.deck}</p>
            </div>

            <div className="col-grid col-grid-3">
              <div className="col">
                <p className="byline">{about.byline}</p>
                <p className="body-text dropcap">{about.body[0]}</p>
                <p className="body-text">{about.body[1]}</p>
                <div className="notices-box" data-title="At A Glance">
                   <div className="skill-row"><span>Open to Work</span><span style={{ color: 'var(--accent)' }}>{personalInfo.openToWork ? '✓ Yes' : 'No'}</span></div>
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
                 <p style={{ fontFamily: "'IM Fell English', serif", fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '12px' }}>{personalInfo.role}</p>
                 
                 <div className="stats-row">
                    <div className="stat-item">
                      <span className="stat-number">{projects.length}+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">{personalInfo.awards}</span>
                      <span className="stat-label">{personalInfo.awards > 1 ? 'Awards' : 'Award'}</span>
                    </div>
                 </div>

                 <div className="pull-quote">
                    <p>"{quotes[0].text}"</p>
                    <cite>— {quotes[0].author}</cite>
                 </div>
              </div>
              <div className="col-divider"></div>
              <div className="col">
                <p className="subhead">{publications.blogsTitle}</p>
                <p className="body-text" style={{ fontStyle: 'italic', marginBottom: '15px' }}>
                  {publications.description}
                </p>
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                   <a href={publications.url} target="_blank" rel="noreferrer" className="project-link">Read Full Periodicals →</a>
                </div>
                <div className="photo-box">
                   <div style={{ background: 'var(--paper-dark)', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', filter: 'sepia(40%)' }}>⌨️</div>
                   <p className="photo-caption">Sources say the developer's workstation is rarely idle, often lit by the glow of a dozen open terminals.</p>
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
                <p className="body-text">Mastery over the modern web's most powerful libraries, with an emphasis on seamless state management and vintage aesthetics.</p>
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
                    <ProjectCard {...p} onReadMore={() => handleReadMore(p)} />
                  </div>
                  {i < 2 && <div className="col-divider"></div>}
                </React.Fragment>
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
               <button onClick={handleArchives} className="project-link" style={{ fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 20px', borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
                 View The Full Project Catalogue (Sheet III) →
               </button>
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
                 <Timeline items={experience} />
              </div>
              <div className="col-divider"></div>
              <div className="col" id="contact">
                 <p className="subhead">Establish Correspondence</p>
                 <div className="classifieds-grid">
                    <a className="classified" href={`mailto:${contact.email}`}>
                      <span className="classified-icon">✉</span>
                      <span className="classified-title">Electronic Mail</span>
                      {contact.email}
                    </a>
                    <a className="classified" href={contact.github} target="_blank" rel="noreferrer">
                      <span className="classified-icon">⌨</span>
                      <span className="classified-title">GitHub Archives</span>
                      Check Repositories
                    </a>
                    <a className="classified" href={contact.linkedin} target="_blank" rel="noreferrer">
                      <span className="classified-icon">☎</span>
                      <span className="classified-title">LinkedIn Ledger</span>
                      Professional Network
                    </a>
                    <a className="classified" href={contact.twitter} target="_blank" rel="noreferrer">
                      <span className="classified-icon">𝕏</span>
                      <span className="classified-title">The X Dispatch</span>
                      Latest Transmissions
                    </a>
                    <a className="classified" href={personalInfo.cvUrl} download>
                      <span className="classified-icon">📄</span>
                      <span className="classified-title">Curriculum Vitæ</span>
                      Download PDF
                    </a>
                    <button className="classified" onClick={handlePhotography} style={{ width: '100%' }}>
                      <span className="classified-icon">📸</span>
                      <span className="classified-title">Sunday Supplement</span>
                      Mobile Photography
                    </button>
                 </div>
              </div>
            </div>
          </section>
        </>
      ) : view.type === 'project' ? (
        <ProjectDetail project={view.data} onBack={handleBack} />
      ) : view.type === 'photography' ? (
        <SundaySupplement photography={view.data} onBack={handleBack} />
      ) : (
        <ProjectArchives projects={projects} onReadMore={handleReadMore} onBack={handleBack} />
      )}
    </NewspaperLayout>
  );
}

export default App;
