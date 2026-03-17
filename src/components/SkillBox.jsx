import React from 'react';

const SkillBox = ({ title, skills }) => {
  return (
    <div className="notices-box" data-title={title}>
      {skills.map((skill, i) => (
        <div key={i} className="skill-row">
          <span>{skill.name}</span>
          <div className="skill-bar-outer">
            <div 
              className="skill-bar-inner" 
              style={{ width: skill.level === 'Expert' || skill.level === 'Pioneer' ? '95%' : skill.level === 'Advanced' || skill.level === 'Senior' ? '85%' : '75%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBox;
