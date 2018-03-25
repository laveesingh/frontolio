import React from 'react'
import axios from 'axios'
import cookies from 'js-cookie'

class CreatePost extends React.Component {
  state = {
  }
  handleSubmit = e => {
    e.preventDefault()
    const csrfmiddlewaretoken = cookies.get('csrftoken')
    const formData = {
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
    }
    axios({
      url: 'http://localhost:8000/blog/post/create/',
      method: 'post',
      headers: {'X-CSRFToken': csrfmiddlewaretoken},
      data: formData
    })
      .then(response => console.log('response from server:', response))
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    return (
      <div className={this.props.className}>
        <form className='create-post' onSubmit={this.handleSubmit}>
          <h1>Create a new post</h1> <br />
          <div className='input-group'>
            <label>title</label>
            <input type='text' id='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-group'>
            <label>description</label>
            <input type='text' id='description'
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-group'>
            <label>content ( supports markdown )</label>
            <textarea id='content'
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' onClick={this.handleSubmit}>
            Create
          </button>
        </form>
      </div>
    )
  }
}

export default CreatePost
