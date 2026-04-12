'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const ExperienceDetail = ({ item }) => {
  const router = useRouter();
  if (!item) return null;

  return (
    <section className="page animated fadeIn">
      <div className="section-label" style={{ marginBottom: '18px' }}>
        <span className="section-label-rule"></span>
        <span className="section-label-text">Special Supplement — Industrial Report</span>
        <span className="section-label-rule"></span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => router.back()}
          style={{ 
            fontFamily: "'IM Fell English', serif", 
            fontSize: '0.8rem', 
            background: 'var(--ink)', 
            color: 'var(--paper)', 
            padding: '4px 12px', 
            border: 'none', 
            cursor: 'pointer',
            float: 'left'
          }}
        >
          ← Return to Front Page
        </button>
        <span className="kicker" style={{ clear: 'both', display: 'block', paddingTop: '10px' }}>{item.year} Chronology</span>
        <h1 className="headline-main" style={{ fontSize: '2.8rem' }}>{item.title}</h1>
        <div className="masthead-rule-thin" style={{ maxWidth: '400px', margin: '10px auto' }}></div>
      </div>

      <div className="col-grid col-grid-2">
        <div className="col">
          <p className="subhead">The Tenure Report: 6 Months of Technical Excellence</p>
          <p className="byline">Dispatch by Abhijeet Kakade · Senior Industrial Analyst</p>
          
          <div className="notices-box" data-title="Tenure Summary" style={{ marginTop: '20px' }}>
            <p className="body-text" style={{ fontSize: '0.85rem', marginBottom: 0 }}>
              "A 6-month intensive tenure focused on full-stack architecture for emerging SaaS and FinTech platforms. Deliverables ranged from complex SQL database scaling to the implementation of secure payment orchestration layers."
            </p>
          </div>

          <div className="photo-box" style={{ marginTop: '25px' }}>
            <div style={{ background: 'var(--paper-dark)', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', filter: 'sepia(40%)' }}>
              🏗️
            </div>
            <p className="photo-caption">Visualizing the high-performance integration layers developed during the Autumn '25 sprint.</p>
          </div>
        </div>
        
        <div className="col-divider"></div>

        <div className="col">
          <p className="subhead-sm">Individual Project Dispatches</p>
          <div className="dispatches-list">
            {item.internshipProjects ? item.internshipProjects.map((proj, i) => (
              <div key={i} className="dispatch-item" style={{ borderBottom: '1px solid rgba(26,16,8,0.1)', paddingBottom: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p className="dispatch-title" style={{ margin: 0, fontSize: '1.1rem' }}>{proj.title}</p>
                  {proj.url && proj.url !== '#' && (
                    <a href={proj.url} target="_blank" rel="noreferrer" className="project-link" style={{ fontSize: '0.75rem' }}>Visit Project →</a>
                  )}
                </div>
                <p style={{ fontFamily: "'IM Fell English', serif", fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '8px', color: 'var(--accent)' }}>
                  Stack: {proj.tech}
                </p>
                <ul style={{ margin: 0, paddingLeft: '18px' }}>
                  {proj.work.map((w, idx) => (
                    <li key={idx} className="body-text" style={{ fontSize: '0.85rem', marginBottom: '4px', lineHeight: '1.4' }}>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            )) : (
              <p className="body-text">Full technical records are preserved in the physical archives.</p>
            )}
          </div>

          <div className="notices-box" data-title="Core Competencies" style={{ marginTop: '30px' }}>
             <div className="skill-row"><span>Architecture</span><span>Full-Stack</span></div>
             <div className="skill-row"><span>UI/UX</span><span>React / Next.js</span></div>
             <div className="skill-row"><span>Infrastructure</span><span>Node / MariaDB / Mongo</span></div>
             <div className="skill-row"><span>Integrations</span><span>Stripe / App Router</span></div>
          </div>
          
          <div className="ornament-rule" style={{ marginTop: '40px' }}>
            <hr /><span>❧</span><hr />
          </div>
          
          <p style={{ textAlign: 'center', fontFamily: "'IM Fell English', serif", fontStyle: 'italic', opacity: 0.6, fontSize: '0.8rem' }}>
            End of Supplement. Full technical records available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetail;

