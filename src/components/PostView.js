import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import styled from 'styled-components'
import renderHTML from 'react-render-html'
import {getBlogPostById} from '../api/consumers'

class PostView extends React.Component {
  componentWillMount() {
    if (!this.props.blogPost) {
      const postId = this.props.match.params.id
      const callback = response => this.props.setBlogPost(response.data.data)
      getBlogPostById(postId, callback)
    }
  }
  render() {
    if (!this.props.blogPost) return <h1>Oops!</h1>
    const post = this.props.blogPost.fields
    return (
      <div className={this.props.className}>
        <div className="title">{post.title}</div>
        <div className="description">{post.description}</div>
        <div className="content">{renderHTML(post.content)}</div>
      </div>
    )
  }
}

const StyledPostView = styled(PostView)`
  & {
    box-shadow: 1px 1px 5px grey;
    .title {
      padding: 20px;
      font-size: 24px;
      color: white;
      font-weight: 700;
      background-image: linear-gradient(
        312deg,
        rgba(20, 19, 78, 0.8) 0%,
        rgba(81, 45, 90, 0.8) 68%,
        rgba(132, 59, 97, 0.8) 100%
      );
      filter: hue-rotate(30deg);
    }
    .description {
      padding: 20px;
      font-weight: 550;
      font-size: 20px;
    }
    .content {
      padding: 20px;
      font-weight: 500;
      font-size: 18px;
    }
  }
`

const mapStateToProps = state => ({
  blogPost: state.blog.blogPost,
})

const mapDispatchToProps = dispatch => ({
  setBlogPost: post => dispatch(actions.setBlogPost(post)),
})
export default connect(mapStateToProps, mapDispatchToProps)(StyledPostView)
