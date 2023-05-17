import React from 'react';
import Project from '../components/project';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Lit List', link:'https://samanthaahn.github.io/fiesta-event/' },
    { id: 2, title: 'Food Critics', link:'https://hidden-retreat-77670.herokuapp.com/'},
    { id: 3, title: 'Tech Blog', link: 'https://gentle-chamber-77686.herokuapp.com/' },
    { id: 4, title: 'Note Taker', link: 'https://github.com/samanthaahn/note-taker-starter-app' },
    { id: 5, title: 'Weather API', link: 'https://samanthaahn.github.io/weather-information/' },
    { id: 6, title: 'Work Day Scheduler', link:'https://samanthaahn.github.io/work-day-scheduler/' },
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