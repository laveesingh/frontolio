import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import CreatePost from './CreatePost'
import PostList from './PostList'
import {NavLink} from './styled'

const Blog = props => (
  <div className={props.className}>
    <NavLink to='/blog/create' fontSize='16px'>Create New Post</NavLink>
    <NavLink to='/blog/list'>Posts List</NavLink>
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
