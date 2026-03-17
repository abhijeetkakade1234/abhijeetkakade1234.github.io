import React from 'react';

const TimelineItem = ({ item, isLast, onReadMore }) => {
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
        
        {isSpecial && onReadMore && (
          <button 
            onClick={() => onReadMore(item)}
            className="project-link"
            style={{ 
              fontSize: '0.72rem', 
              marginTop: '8px', 
              background: 'none', 
              border: 'none', 
              padding: 0, 
              cursor: 'pointer',
              display: 'inline-block'
            }}
          >
            Read Special Supplement →
          </button>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ items, onReadMore }) => {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} onReadMore={onReadMore} isLast={i === items.length - 1} />
      ))}
    </div>
  );
};

export default Timeline;
