import React from 'react'
import Project from './Project'

type Props = {}

const Projects = (props: Props) => {
  const projects = [
    {
      imgsrc: 'img1.png',
      projectTitle: 'Berrnardino Ochoa portfolio',
      projectLink: 'https://bernardinoochoa.vercel.app/',
      description: ''
    },
    {
      imgsrc: 'img2.png',
      projectTitle: 'Gym app landing page',
      projectLink: 'https://gym-app-typescript.pages.dev/',
      description: ''
    },
    {
      imgsrc: 'img3.png',
      projectTitle: 'Sandbox tool',
      projectLink: 'https://sandbox-tool.vercel.app/',
      description: ''
    },
  ]
  return (
    <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-wrap -m-4">
          {
            projects.map((project, key ) => (
              <Project  key={key} imgsrc={project.imgsrc} projectTitle={project.projectTitle} projectLink={project.projectLink} />
            ))
          }

      </div>
    </div>
  )
}

export default Projects