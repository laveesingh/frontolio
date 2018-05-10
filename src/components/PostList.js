import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Grid, Col, Button, Glyphicon} from 'react-bootstrap'
import Fade from './Fade'
import Slide from './Slide'
import * as actions from '../actions/index'

class PostList extends React.Component {
  goToPostView = (e, post) => {
    e.preventDefault()
    this.props.setBlogPost(post)
    this.props.history.push(`/blog/post/${post.pk}`)
  }

  editPost = (e, post) => {
    alert('editting')
  }

  deletePost = (e, post) => {
    axios({
      url: `http://localhost:8000/blog/post/delete/${post.pk}`,
    }).then(response => {
      const data = response.data
      if (data.status === 0) {
        this.props.removeBlogPostFromList(post)
      }
    })
  }

  componentWillMount() {
    axios({
      url: 'http://localhost:8000/blog/post/list/',
      method: 'get',
    }).then(response => {
      this.props.setBlogPostList(response.data.posts)
    })
  }

  render() {
    const blogPostList = this.props.blogPostList
    if (!blogPostList || blogPostList.length === 0) {
      return <h2>Whoops looks like this list is empty.</h2>
    }
    return (
      <Fade>
        <Grid fluid>
          {blogPostList.map(post => (
            <Col key={post.pk} md={4}>
              <PostCard
                {...post.fields}
                onClick={e => this.goToPostView(e, post)}
                deletePost={e => this.deletePost(e, post)}
                editPost={e => this.editPost(e, post)}
              />
            </Col>
          ))}
        </Grid>
      </Fade>
    )
  }
}

let PostCard = props => (
  <Slide className={props.className}>
    <div className="title" onClick={props.onClick}>
      {props.title}
    </div>
    <div className="description" onClick={props.onClick}>
      {props.description}
    </div>
    <Grid fluid className="controls">
      <Col md={6}>
        <Button block onClick={props.editPost}>
          edit <Glyphicon glyph="pencil" />
        </Button>
      </Col>
      <Col md={6}>
        <Button block onClick={props.deletePost}>
          delete <Glyphicon glyph="trash" />
        </Button>
      </Col>
    </Grid>
  </Slide>
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
  .controls {
    padding: 0px;
    div {
      padding: 0px;
    }
    button {
      color: white;
      text-transform: uppercase;
      font-weight: 600;
      background-image: linear-gradient(
        312deg,
        #14134e 0%,
        #512d5a 68%,
        #843b61 100%
      );
      border-radius: 0px;
      box-shadow: 0px -1px 2px grey;
    }
  }
`

const mapStateToProps = state => ({
  blogPost: state.blog.blogPost,
  blogPostList: state.blog.blogPostList,
})

const mapDispatchToProps = dispatch => ({
  setBlogPost: post => dispatch(actions.setBlogPost(post)),
  setBlogPostList: postList => dispatch(actions.setBlogPostList(postList)),
  removeBlogPostFromList: post =>
    dispatch(actions.removeBlogPostFromList(post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
