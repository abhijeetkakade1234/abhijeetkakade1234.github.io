'use client';
import React from 'react';
import Link from 'next/link';

const TimelineItem = ({ item, isLast }) => {
  const isSpecial = !!item.details;
  
  return (
    <div className="timeline-item">
      <div className="timeline-year">{item.year}</div>
      <div className="timeline-dot-col">
        <div className="timeline-dot"></div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <h4 className="timeline-title">{item.title}</h4>
        <p className="timeline-desc">{item.desc}</p>
        
        {isSpecial && (
          <Link 
            href={`/experience/${item.slug}`}
            className="project-link"
            style={{ 
              fontSize: '0.72rem', 
              marginTop: '8px', 
              display: 'inline-block'
            }}
          >
            Read Special Supplement →
          </Link>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} isLast={i === items.length - 1} />
      ))}
    </div>
  );
};

export default Timeline;

