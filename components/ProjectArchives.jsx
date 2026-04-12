'use client';
import { useRouter } from 'next/navigation';
import ProjectCard from './ProjectCard';

const ProjectArchives = ({ projects }) => {
  const router = useRouter();
  return (
    <section className="page animated fadeIn">
      <div className="section-label" style={{ marginBottom: '18px' }}>
        <span className="section-label-rule"></span>
        <span className="section-label-text">Page III — Project Archives</span>
        <span className="section-label-rule"></span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => router.push('/')}
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
        <span className="kicker" style={{ clear: 'both', display: 'block', paddingTop: '10px' }}>Full Catalogue</span>
        <h1 className="headline-main" style={{ fontSize: '3rem' }}>The Complete Archives</h1>
        <p className="headline-deck">A comprehensive collection of decentralised enterprises and technical dispatches.</p>
        <div className="masthead-rule-thin" style={{ maxWidth: '400px', margin: '10px auto' }}></div>
      </div>

      <div className="col-grid col-grid-2-eq" style={{ gap: '20px' }}>
        <div className="col">
           <p className="subhead">Technical Portfolio (A-M)</p>
           {projects.slice(0, Math.ceil(projects.length / 2)).map((p) => (
             <ProjectCard key={p.slug} {...p} onReadMore={() => {}} />
           ))}
        </div>
        <div className="col-divider"></div>
        <div className="col">
           <p className="subhead">Technical Portfolio (N-Z)</p>
           {projects.slice(Math.ceil(projects.length / 2)).map((p) => (
             <ProjectCard key={p.slug} {...p} onReadMore={() => {}} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectArchives;

