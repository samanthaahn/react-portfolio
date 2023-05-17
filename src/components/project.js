import React from 'react';

function Project({ title, image, link }) {
  const handleProjectClick = () => {
    window.open(link, '_blank');
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="projectBox" onClick={handleProjectClick}>
      <img src={image} alt={title} className="projectImage" />
      <div className="projectContent">
        <h2>{title}</h2>
      </div>
    </a>
  );
}

export default Project;