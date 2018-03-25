import React from 'react'
import axios from 'axios'
import PieChart from 'react-svg-piechart'

export default class CFanalyzer extends React.Component {

  state = {
    username: '',
    report: null,
  }

  colorMap = {
    'WRONG_ANSWER': 'red',
    'TIME_LIMIT_EXCEEDED': 'yellow',
    'COMPILATION_ERROR': 'orange',
    'RUNTIME_ERROR': 'darkred',
    'CHALLENGED': 'blue',
    'OK': 'green'
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
      .then(response => {
        const reportObject = response.data.report
        let reportList = Object.keys(reportObject).map( key => ({
          title: key,
          value: reportObject[key],
          color: this.colorMap[key] || 'black',
        }))
        this.setState({ report: reportList })
      })
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
        {this.state.report ? (
          <div style={{ width: '300px', height: '300px', margin: '20px'}}>
            <PieChart 
              data={this.state.report}
              expandOnHover
              strokeWidth={0}
            />
          </div>
        ): (
          <div />
        )}
      </div>
    )
  }
}
