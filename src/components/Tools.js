import React from 'react'
import { Link, Route } from 'react-router-dom'
import CFanalyzer from './CFanalyzer'

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
      <Route path='/tools/cfanalyzer' render={props => <CFanalyzer {...props} />} />
    </div>
  )
}

export default Tools
