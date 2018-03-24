import React from 'react'

class PostList extends React.Component {
  state = {
  }
  handleSubmit = e => {
    e.preventDefault()
    const formData = {
      title: this.state.title,
      description: this.state.description,
      content: this.state.content
    }
    console.log('submitting:', formData)
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

export default PostList
