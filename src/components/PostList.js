import React from 'react'
import axios from 'axios'

class PostList extends React.Component {

  state = {
    postsList: [],
    opacity: 0,
  }

  componentWillMount() {
    axios({
      url: 'http://localhost:8000/blog/post/list/',
      method: 'get',
    })
      .then(response => this.setState({ postsList: response.data.posts }))
  }

  componentWillUpdate() {
    setTimeout(() => this.setState({ opacity: 1 }))
  }

  render() {
    if (this.state.postsList.length === 0) {
      return <h2>Whoops looks like this list is empty.</h2>
    }
    return (
      <div style={{
        opacity: this.state.opacity,
        transition: 'opacity 500ms linear'
      }}>
        {this.state.postsList.map( post => (
          <div>
            <h1> {post.fields.title} </h1>
            <h2> {post.fields.description} </h2>
            <h3> {post.fields.content} </h3>
          </div>
        ))}
      </div>
    )
  }
}

export default PostList
