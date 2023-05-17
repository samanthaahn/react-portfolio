import React from "react";
import headshot from "../assets/images/headshot.JPG";
import "../App.css"; 

function AboutMe() {
  return (
    <div className="aboutMeMain">
      <h1 className="samantha">Samantha Ahn</h1>
      <div className="content">
        <img
          className="headshot"
          src={headshot} style={{ width: "320px", height: "460px" }}
          alt="This is a headshot of Samantha Ahn"
        />
        <div className="bio">
          <p>
            Hi there! I'm Sami, a passionate and dedicated full-stack developer.
            I recently completed the prestigious UCLA bootcamp, where I honed my
            skills in web development and gained a solid foundation in both
            front-end and back-end technologies.
          </p>
          <p>
            With my extensive work experience, I bring a wealth of knowledge and
            expertise to the table. I have successfully collaborated on numerous
            projects, leveraging my skills in HTML, CSS, JavaScript, React, Node.js,
            and databases like MongoDB and SQL. From building responsive and
            user-friendly interfaces to designing robust server-side architectures,
            I thrive on creating innovative solutions that meet the unique needs of
            each project.
          </p>
          <p>
            I am not only a technically proficient developer but also a strong team
            player. I'm eager to apply my skills and knowledge in a professional
            setting, where I can contribute to meaningful projects and continue to
            grow as a developer. I have a strong work ethic, excellent
            problem-solving abilities, and a passion for continuously learning and
            staying up-to-date with the latest industry trends and best practices.
          </p>
          <p>
            I am excited about the opportunity to work with like-minded individuals
            and contribute to the success of innovative projects. Let's connect and
            explore how we can create amazing digital experiences together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
