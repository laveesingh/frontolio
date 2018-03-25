import React from 'react'
import { Link } from 'react-router-dom'

const Tools = props => {
  const toolsList = [
    {name: 'Codeforces Analyzer', link: '/tools/cfanalyzer'},
    {name: 'Testcase Generator', link: '/tools/testgen'}
  ]
  return (
    <div>
      {toolsList.map( tool => (
        <h1 key={tool.name}><Link to={tool.link}>{tool.name}</Link></h1>
      ))}
    </div>
  )
}

export default Tools
