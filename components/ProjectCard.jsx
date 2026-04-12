'use client';
import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ title, slug, category, impact, techStack }) => {
  return (
    <div className="project-card">
      <div className="impact-box">
        <span className="impact-symbol">⚡</span>
        <span>{impact}</span>
      </div>
      <div className="project-title">{title}</div>
      <p style={{ fontFamily: "'IM Fell English', serif", fontSize: '0.75rem', textAlign: 'center', marginBottom: '8px', opacity: 0.8 }}>
        {category}
      </p>
      <div className="project-tags">
        {techStack.split(',').map((tag, i) => (
          <span key={i} className="tag">{tag.trim()}</span>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '12px' }}>
        <Link href={`/projects/${slug}`} className="project-link">Read Full Report →</Link>
      </div>
    </div>
  );
};


export default ProjectCard;