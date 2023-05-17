import React from 'react';

function Project({ title }) {
  return (
    <div className="project">
      <div className="projectBox">
      {title}
    </div>
    </div>
  );
}

export default Project;