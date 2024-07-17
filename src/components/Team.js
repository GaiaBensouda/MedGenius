import React from 'react';
import './Team.css';
import TeamMember from './TeamMember'; // Import the TeamMember component

const Team = () => {
  const teamMembers = [
    {
      name: 'Gaia Bensouda',
      position: 'CEO',
      image: `${process.env.PUBLIC_URL}/images/gaia.jpg`,
      bio: 'Dedicated to improving healthcare.',
      linkedin: 'https://www.linkedin.com/in/gaia-bensouda-korachi-352527260/'
    },
    {
      name: 'Adrien Dumont',
      position: 'CTO',
      image: `${process.env.PUBLIC_URL}/images/adrien.jpg`,
      bio: 'Expert in AI and technology.',
      linkedin: 'https://www.linkedin.com/in/adrien-dumont-x/'
    },
    {
      name: 'Raphael Delpirou',
      position: 'CFO',
      image: `${process.env.PUBLIC_URL}/images/raph.jpg`,
      bio: 'Experienced in financial management.',
      linkedin: 'https://www.linkedin.com/in/rapha%C3%ABl-delpirou-40a4b1253/'
    },
    {
      name: 'Sacha Elalouf-Lewiner',
      position: 'COO',
      image: `${process.env.PUBLIC_URL}/images/sacha.jpg`,
      bio: 'Operational excellence in healthcare.',
      linkedin: 'https://www.linkedin.com/in/sacha-elalouf/'
    },
    {
      name: 'Arturo Favara',
      position: 'CMO',
      image: `${process.env.PUBLIC_URL}/images/arturo.jpg`,
      bio: 'Marketing strategies in healthcare.',
      linkedin: 'https://www.linkedin.com/in/arturo-favara/?locale=fr_FR'
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
