import React from 'react';
import Project from '../components/project';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
    { id: 3, title: 'Project 3' },
    { id: 4, title: 'Project 4' },
    { id: 5, title: 'Project 5' },
    { id: 6, title: 'Project 6' },
  ];

  const handleProjectClick = (projectId) => {
    // Handle the click event for a specific project
    console.log('Clicked on project with id:', projectId);
  };

  return (
    <div className="portfolio">
      <div className="projectGrid">
        {projects.map((project) => (
          <div
            className="projectBox"
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="projectContent">
              <h2>{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;