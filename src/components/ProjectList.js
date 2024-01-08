import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList( {projects} ) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map((projectObj) => {
          return <ProjectItem name={projectObj.name} about={projectObj.about} technologies={projectObj.technologies} key={projectObj.id}></ProjectItem>
        })
      }</div>
    </div>
  );
}

export default ProjectList;
