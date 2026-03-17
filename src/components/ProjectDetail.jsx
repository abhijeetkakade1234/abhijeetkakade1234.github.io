import React from 'react';

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <section className="page animated fadeIn">
      <div className="section-label" style={{ marginBottom: '18px' }}>
        <span className="section-label-rule"></span>
        <span className="section-label-text">Page II — Special Supplement</span>
        <span className="section-label-rule"></span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button 
          onClick={onBack}
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
        <span className="kicker" style={{ clear: 'both', display: 'block', paddingTop: '10px' }}>{project.category} Report</span>
        <h1 className="headline-main" style={{ fontSize: '3rem' }}>{project.title}</h1>
        <div className="masthead-rule-thin" style={{ maxWidth: '400px', margin: '10px auto' }}></div>
      </div>

      <div className="col-grid col-grid-2">
        <div className="col">
          <p className="subhead">The Inside Story: How {project.title} Redefined {project.category.split('/')[0]}</p>
          <p className="byline">Dispatch by Abhijeet Kakade · Special Feature</p>
          <p className="body-text dropcap">
            {project.description}
          </p>
          <div className="photo-box" style={{ marginTop: '20px' }}>
            <div style={{ background: 'var(--paper-dark)', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', filter: 'sepia(40%)' }}>
              🏗️
            </div>
            <p className="photo-caption">Early conceptual architecture of {project.title}, emphasizing the {project.techStack.split(',')[0]} integration.</p>
          </div>
        </div>
        
        <div className="col-divider"></div>

        <div className="col">
          <p className="subhead-sm">Technical Specifications</p>
          <div className="notices-box" data-title="Core Features">
            {project.features && project.features.map((feature, i) => (
              <div key={i} className="skill-row">
                <span>✦ {feature.split(':')[0]}</span>
                <span style={{ fontSize: '0.7rem' }}>{feature.split(':')[1] || ''}</span>
              </div>
            ))}
          </div>
          
          <p className="subhead-sm" style={{ marginTop: '20px' }}>The Build Report</p>
          <p className="body-text" style={{ fontSize: '0.85rem' }}>
            Engineered using a modern stack of <strong>{project.techStack}</strong>. This project serves as a testament to the power of developer commitment and the "Ship Early, Refactor Always" doctrine.
          </p>

          <div className="ornament-rule" style={{ marginTop: '30px' }}>
            <hr /><span>❧</span><hr />
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <a href={project.url} className="project-link" style={{ fontSize: '1rem' }}>Inspect the Live Wires →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
