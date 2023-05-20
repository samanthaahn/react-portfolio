import React from "react";
import Project from "../components/project";
import bookImage from "../assets/images/books.webp";
import brainImage from "../assets/images/brain.jpeg";
import desktopImage from "../assets/images/desktop.webp";
import eyesImage from "../assets/images/eyes.jpeg";
import pixelImage from "../assets/images/pixels.webp";
import writingImage from "../assets/images/writing.jpeg";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Habit Tracker",
      link: "https://whispering-gorge-05814.herokuapp.com",
      image: pixelImage,
      github: "https://github.com/samanthaahn/magic-list",
    },
    {
      id: 2,
      title: "Lit List",
      link: "https://samanthaahn.github.io/fiesta-event/",
      image: bookImage,
      github: "https://github.com/samanthaahn/fiesta-event",
    },
    {
      id: 3,
      title: "Food Critics",
      link: "https://hidden-retreat-77670.herokuapp.com/",
      image: brainImage,
      github: "https://github.com/samanthaahn/food-critics",
    },
    {
      id: 4,
      title: "Tech Blog",
      link: "https://gentle-chamber-77686.herokuapp.com/",
      image: writingImage,
      github: "https://github.com/samanthaahn/tech-blog",
    },
    {
      id: 5,
      title: "Weather API",
      link: "https://samanthaahn.github.io/weather-information/",
      image: eyesImage,
      github: "https://github.com/samanthaahn/weather-information",
    },
    {
      id: 6,
      title: "Work Day Scheduler",
      link: "https://samanthaahn.github.io/work-day-scheduler/",
      image: desktopImage,
      github: "https://github.com/samanthaahn/work-day-scheduler",
    },
  ];

  const handleProjectClick = (projectId) => {
    // Handle the click event for a specific project
    console.log("Clicked on project with id:", projectId);
  };

  return (
    <div className="portfolio">
      <div className="projectGrid">
        {projects.map((project) => (
          <div className="github">
            <a href={project.link} target="_blank">
              <div
                className="projectBox"
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="projectContent">
                  <h2>{project.title}</h2>
                  <img className="images" src={project.image} />
                </div>
              </div>
            </a>

          <a href={project.github} target="_blank">
            Github
          </a>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
