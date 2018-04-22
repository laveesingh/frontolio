import React from 'react'
import styled from 'styled-components'

export default class Portfolio extends React.Component {

  skillsList = [
    {name: 'Python', proficiency: 85},
    {name: 'ReactJS', proficiency: 85},
    {name: 'Javascript/NodeJS', proficiency: 85},
    {name: 'C++', proficiency: 60},
    {name: 'MongoDB', proficiency: 60},
    {name: 'PostgreSQL', proficiency: 60}
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
          <Skill name={skill.name} level={skill.proficiency} />
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

let Skill = props => (
  <span className={props.className}>
    {props.name}
  </span>
)
Skill = styled(Skill)`
  & {
    background-color: ${props => props.level >= 80 ? 'green' : 'red'};
    padding: 10px 25px;
    margin: 10px;
    border-radius: 30px;
    box-shadow: 0px 0px 10px grey;
    cursor: pointer;
    font-weight: 600;
  }
`
