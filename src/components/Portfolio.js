import React from 'react'

export default class Portfolio extends React.Component {

  skillsList = [
    {name: 'Python', proficiency: 'advanced'},
    {name: 'ReactJS', proficiency: 'advanced'},
    {name: 'Javascript/NodeJS', proficiency: 'advanced'},
    {name: 'C++', proficiency: 'intermediate'},
    {name: 'MongoDB', proficiency: 'intermediate'},
    {name: 'PostgreSQL', proficiency: 'intermediate'}
  ]

  projectsList = [
    {name: 'Denmark Mentions', sourceUrl: 'https://github.com/laveesingh/Denmark-Mentions',
      demoUrl: 'http://165.227.88.123:8000/', description: 'A social media scraper built with django' },
    {name: 'POISE', sourceUrl: 'https://github.com/laveesingh/poise',
      demoUrl: '#', description: 'An app to represent point of interest sharing and experience' },

  ]

  render() {
    return (
      <div>
        <h1>Lavee Singh</h1>
        <h3>Full Stack Web Developer and Computer Programmer</h3>
        <h2>Skills</h2>
        { this.skillsList.map(skill => (
          <h4 key={skill.name}>{skill.name}: {skill.proficiency}</h4>
        ))}
        <h2>Projects</h2>
        { this.projectsList.map(project => (
          <div key={project.name}>
            <h4><a href={project.sourceUrl}>{project.name}</a></h4>
            <a href={project.demoUrl}>Demo</a>
            <p>{project.description}</p>
          </div>
        ))}
        <button>Hire Me</button>
      </div>
    )
  }
}
