import React from 'react';

const TimelineItem = ({ year, title, desc, isLast }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-year">{year}</div>
      <div className="timeline-dot-col">
        <div className="timeline-dot"></div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <h4 className="timeline-title">{title}</h4>
        <p className="timeline-desc">{desc}</p>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <TimelineItem key={i} {...item} isLast={i === items.length - 1} />
      ))}
    </div>
  );
};

export default Timeline;
