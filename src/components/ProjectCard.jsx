import React from 'react';

const ProjectCard = ({ title, category, techStack, description, url, onReadMore }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="body-text" style={{ textAlign: 'left' }}>
        {description}
      </p>
      <div className="project-tags">
        <span className="tag">{category}</span>
        {techStack.split(',').map((tech, i) => (
          <span key={i} className="tag" style={{ background: 'rgba(26,16,8,0.05)', border: 'none' }}>{tech.trim()}</span>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button 
          onClick={onReadMore}
          className="project-link" 
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
        >
          Read the full report →
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
