import React from "react";
import Project from "../components/project";



function Portfolio() {

  const projects = [
    { title: "project1" },
    { title: "project2" },
    { title: "project3" },
    { title: "project4" },
    { title: "project5" },
    { title: "project6" },
  ];

  console.log(projects)
  
  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} />
      ))}
    </div>
  );
}

export default Portfolio;
