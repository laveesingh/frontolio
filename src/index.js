import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Navbar from './components/Navbar'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' render={ props => <Home {...props} />} />
          <Route path='/blog' render={ props => <Blog {...props} />} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
