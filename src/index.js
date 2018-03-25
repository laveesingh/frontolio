import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Tools from './components/Tools'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' render={ props => <Blog {...props} />} />
          <Route path='/blog' render={ props => <Blog {...props} />} />
          <Route path='/portfolio' render={ props => <Portfolio {...props} />} />
          <Route path='/tools' render={ props => <Tools {...props} />} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
