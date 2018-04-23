import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import CreatePost from './CreatePost'
import PostList from './PostList'
import {NavLink} from './styled'

class Blog extends React.Component{
  state = {
    opacity: 0
  }
  componentDidMount() {
    setTimeout(() => this.setState({ opacity: 1}))
  }
  render() {
    return (
      <div className={this.props.className} style={{
        opacity: this.state.opacity,
        transition: 'opacity 500ms ease-in-out'
      }}>
        <NavLink to='/blog/create'>Create New Post</NavLink>
        <NavLink to='/blog/list'>Posts List</NavLink>
        <Route exact path='/' render={props => <PostList {...props} />} />
        <Route exact path='/blog' render={props => <PostList {...props} />} />
        <Route path='/blog/create' render={props => <CreatePost {...props} />} />
        <Route path='/blog/list' render={props => <PostList {...props} />} />
      </div>
    )
  }
}

export default styled(Blog)`
  & {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    background: white;
    box-shadow: 0px 0px 5px grey;
    a {
      text-decoration: none;
    }
  }
`
