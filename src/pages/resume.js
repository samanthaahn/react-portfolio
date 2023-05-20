import React from 'react'
import '../App.css'
import resume from '../assets/images/resume.pdf'


function Resume() {
  return (
    <section className="resume">
      <a className="resumeDownload" href={resume} download>
      You can download my resume here!
      </a>
      <h2>Experience</h2>
      <h3>Front-end Proficiencies</h3>
      <ul>HTML</ul>
      <ul>CSS</ul>
      <ul>JavaScript</ul>
      <ul>Responsive design</ul>
      <ul>React</ul>
      <ul>Bootstrap</ul>
      
      <h3>Back-end Proficiencies</h3>
      <ul>APIs</ul>
      <ul>Node</ul>
      <ul>Express</ul>
      <ul>MySQL, Sequilize</ul>
      <ul>MongoDB, Mongoose</ul>
      <ul>GraphQL</ul>

    </section>
  )
}

export default Resume