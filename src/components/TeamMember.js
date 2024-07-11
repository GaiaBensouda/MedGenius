import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, position, image, bio, linkedin }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="member-image" />
      <div className="member-info">
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{bio}</p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
      </div>
    </div>
  );
};

export default TeamMember;
