import React from 'react'
import {connect} from 'react-redux'

class PostView extends React.Component {
  render() {
    if (!this.props.blogPost) return <h1>Oops!</h1>
    return <h1>PostView {this.props.blogPost.pk}</h1>
  }
}

const mapStateToProps = state => ({
  blogPost: state.blog.blogPost,
})
export default connect(mapStateToProps)(PostView)
