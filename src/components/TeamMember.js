import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, position, image, bio, linkedin }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="team-member-image" />
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{bio}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="LinkedIn logo" className="linkedin-logo" />
      </a>
    </div>
  );
};

export default TeamMember;
