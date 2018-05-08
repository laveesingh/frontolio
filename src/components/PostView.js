import React from 'react'
import {connect} from 'react-redux'

class PostView extends React.Component {
  render() {
    return <h1>PostView</h1>
  }
}

export default connect()(PostView)
