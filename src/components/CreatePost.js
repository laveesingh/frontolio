import React from 'react'
import axios from 'axios'
import cookies from 'js-cookie'
import {TextField, TextArea} from './Input'
import Button from './Button'

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
          <TextField label='title'
            value={this.state.title}
            onChange={this.handleChange} />
          <TextField label='description'
            value={this.state.description}
            onChange={this.handleChange} />
          <TextArea label={'content (supports markdown)'}
            value={this.state.content}
            onChange={this.handleChange} />
          <Button type='submit' onClick={this.handleSubmit}>
            Create
          </Button>
        </form>
      </div>
    )
  }
}

export default CreatePost
