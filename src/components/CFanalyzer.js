import React from 'react'

export default class CFanalyzer extends React.Component {

  state = {
    username: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submitting:', this.state.username)
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
