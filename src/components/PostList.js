import React from 'react'
import axios from 'axios'

class PostList extends React.Component {

  state = {
    postsList: []
  }

  componentWillMount() {
    axios({
      url: 'http://localhost:8000/blog/post/list/',
      method: 'get',
    })
      .then(response => this.setState({ postsList: response.data.posts }))
  }

  render() {
    if (this.state.postsList.length === 0) {
      return <h2>Whoops looks like this list is empty.</h2>
    }
    return (
      <div >
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
