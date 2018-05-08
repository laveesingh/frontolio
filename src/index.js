import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Tools from './components/Tools'
import configureStore from './configureStore'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" render={props => <Navbar {...props} />} />
          <Route exact path="/" render={props => <Blog {...props} />} />
          <Route path="/blog" render={props => <Blog {...props} />} />
          <Route path="/portfolio" render={props => <Portfolio {...props} />} />
          <Route path="/tools" render={props => <Tools {...props} />} />
        </div>
      </BrowserRouter>
    )
  }
}

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
