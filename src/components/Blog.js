import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import CreatePost from './CreatePost'
import PostList from './PostList'

const Blog = props => (
  <div className={props.className}>
    <Link to='/blog/create'>Create New Post</Link>
    <Link to='/blog/list'>Posts List</Link>
    <Route exact path='/blog/create' render={props => <CreatePost {...props} />} />
    <Route path='/blog/list' render={props => <PostList {...props} />} />
  </div>
)

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
