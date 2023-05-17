import React from 'react';
import Project from '../components/project';
import bookImage from '../assets/images/books.webp';
import brainImage from '../assets/images/brain.jpeg';
import desktopImage from '../assets/images/desktop.webp';
import eyesImage from '../assets/images/eyes.jpeg';
import pixelImage from '../assets/images/pixels.webp';
import writingImage from '../assets/images/writing.jpeg';


function Portfolio() {
  const projects = [
    { id: 1, title: 'Lit List', link:'https://samanthaahn.github.io/fiesta-event/', image: bookImage },
    { id: 2, title: 'Food Critics', link:'https://hidden-retreat-77670.herokuapp.com/', image: brainImage},
    { id: 3, title: 'Tech Blog', link: 'https://gentle-chamber-77686.herokuapp.com/', image: writingImage },
    { id: 4, title: 'Note Taker', link: 'https://github.com/samanthaahn/note-taker-starter-app', image: pixelImage },
    { id: 5, title: 'Weather API', link: 'https://samanthaahn.github.io/weather-information/', image: eyesImage },
    { id: 6, title: 'Work Day Scheduler', link:'https://samanthaahn.github.io/work-day-scheduler/', image: desktopImage },
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