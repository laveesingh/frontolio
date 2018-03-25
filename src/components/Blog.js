import React from 'react'
import { Route, Link } from 'react-router-dom'
import CreatePost from './CreatePost'
import PostList from './PostList'

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Link to='/blog/create'>Create New Post</Link>
        <Link to='/blog/list'>Posts List</Link>
        <Route exact path='/blog/create' render={props => <CreatePost {...props} />} />
        <Route path='/blog/list' render={props => <PostList {...props} />} />
      </div>
    )
  }
}

export default Blog
