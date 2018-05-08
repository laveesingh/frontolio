import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Grid, Col} from 'react-bootstrap'
import * as actions from '../actions/index'

class PostList extends React.Component {
  state = {
    postsList: [],
    opacity: 0,
  }

  goToPostView = (e, post) => {
    e.preventDefault()
    this.props.setBlogPost(post)
    this.props.history.push(`/blog/post/${post.pk}`)
  }

  componentWillMount() {
    axios({
      url: 'http://localhost:8000/blog/post/list/',
      method: 'get',
    }).then(response => {
      this.setState({postsList: response.data.posts})
      this.props.setBlogPostList(response.data.posts)
    })
    setTimeout(() => this.setState({opacity: 1}))
  }

  render() {
    if (this.state.postsList.length === 0) {
      return <h2>Whoops looks like this list is empty.</h2>
    }
    return (
      <Grid
        fluid
        style={{
          opacity: this.state.opacity,
          transition: 'opacity 500ms linear',
        }}>
        {this.state.postsList.map(post => (
          <Col key={post.pk} md={4}>
            <PostCard
              {...post.fields}
              onClick={e => this.goToPostView(e, post)}
            />
          </Col>
        ))}
      </Grid>
    )
  }
}

let PostCard = props => (
  <div className={props.className} onClick={props.onClick}>
    <div className="title">{props.title}</div>
    <div className="description">{props.description}</div>
  </div>
)

PostCard = styled(PostCard)`
  & {
    margin: 50px auto;
    width: 90%;
    border-radius: 5px;
    box-shadow: 5px 5px 10px grey;
    display: block;
    transition: transform 1s linear;
    cursor: pointer;
    opacity: 0.9;
    &:hover {
      opacity: 1;
      box-shadow: 10px 10px 20px grey;
    }
  }
  .title {
    background-image: linear-gradient(
      312deg,
      #14134e 0%,
      #512d5a 68%,
      #843b61 100%
    );
    padding: 10px;
    box-shadow: 0px 0px 2px grey;
    font-size: 24px;
    font-weight: 600;
    color: white;
    filter: hue-rotate(45deg);
  }
  .description {
    font-size: 20px;
    color: #666666;
    padding: 10px;
    box-shadow: 0px 0px 1px grey;
    background-color: #f8f8f8;
  }
`

const mapStateToProps = state => ({
  blogPost: state.blog.blogPost,
  blogPostList: state.blog.blogPostList,
})

const mapDispatchToProps = dispatch => ({
  setBlogPost: post => dispatch(actions.setBlogPost(post)),
  setBlogPostList: postList => dispatch(actions.setBlogPostList(postList)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
