import React from 'react'
import axios from 'axios'

export default class CFanalyzer extends React.Component {

  state = {
    username: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    axios({
      url: 'http://localhost:8000/blog/tools/cfreport/',
      method: 'get',
      params: {
        username: this.state.username
      }
    })
      .then(response => console.log(response.data.report))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Codeforces Performance Analysis</h1>
          <label>Username</label>
          <input type='text' id='username' value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })} />
          <input type='submit' onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}
