// src/components/Team.js
import React from 'react';
import './Team.css';
import TeamMember from './TeamMember';

const Team = () => {
  const teamMembers = [
    {
      name: 'Gaia Bensouda',
      position: 'CEO',
      image: '/images/gaia.jpg',
      bio: 'Leading the team with a vision to innovate healthcare.',
      linkedin: 'https://www.linkedin.com/in/gaia-bensouda-korachi-352527260/',
    },
    {
      name: 'Adrien Dumont',
      position: 'CTO',
      image: '/images/adrien.jpg',
      bio: 'Chief Technology Officer responsible for technology strategy.',
      linkedin: 'https://www.linkedin.com/in/adrien-dumont-x/',
    },
    {
      name: 'Raphael Delpirou',
      position: 'CFO',
      image: '/images/raph.jpg',
      bio: 'Managing financial actions of the company.',
      linkedin: 'https://www.linkedin.com/in/rapha%C3%ABl-delpirou-40a4b1253/',
    },
    {
      name: 'Sacha Elalouf-Lewiner',
      position: 'COO',
      image: '/images/sacha.jpg',
      bio: 'Overseeing the company’s business operations.',
      linkedin: 'https://www.linkedin.com/in/sacha-elalouf/',
    },
    {
      name: 'Arturo Favara',
      position: 'CMO',
      image: '/images/arturo.jpg',
      bio: 'Leading the marketing team to drive growth.',
      linkedin: 'https://www.linkedin.com/in/arturo-favara/',
    },
  ];

  return (
    <div className="team" id="team">
      <h2>Our Team</h2>
      <p>Meet the dedicated professionals behind MedGenius who are committed to improving healthcare through innovative technology and expertise.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            position={member.position}
            image={member.image}
            bio={member.bio}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
