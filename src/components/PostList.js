import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-bootstrap'

class PostList extends React.Component {

  state = {
    postsList: [],
    opacity: 0,
  }

  componentWillMount() {
    axios({
      url: 'http://localhost:8000/blog/post/list/',
      method: 'get',
    })
      .then(response => this.setState({ postsList: response.data.posts }))
  }

  componentWillUpdate() {
    setTimeout(() => this.setState({ opacity: 1 }))
  }

  render() {
    if (this.state.postsList.length === 0) {
      return <h2>Whoops looks like this list is empty.</h2>
    }
    return (
      <Grid fluid style={{
        opacity: this.state.opacity,
        transition: 'opacity 500ms linear'
      }}>
        {this.state.postsList.map( post => (
          <Col md={4}>
            <PostCard {...post.fields} />
          </Col>
        ))}
      </Grid>
    )
  }
}

let PostCard = props => (
  <div className={props.className}>
    <div className='title'>
      {props.title}
    </div>
    <div className='description'>
      {props.description}
    </div>
    <div className='content'>
      {props.content}
    </div>
  </div>
)

PostCard = styled(PostCard)`
  & {
    margin: 50px auto;
    width: 90%;
    border-radius: 5px;
    box-shadow: 0px 0px 5px grey;
    display: block;
    transition: transform 1s linear;
    &:hover {
      transform: rotateY(180deg);
    }
  }
  .title {
    padding: 10px;
    box-shadow: 0px 0px 2px grey;
    font-size: 24px;
    font-weight: 700;
    color: #37a000;
    background-color: #eeeeee;
  }
  .description {
    font-size: 20px;
    color: #666666;
    padding: 10px 0px;
    box-shadow: 0px 0px 1px grey;
    background-color: #f8f8f8;
  }
  .content {
    padding: 10px;
    margin: 10px;
    font-family: monospace;
    font-size: 14px;
    line-height: 20px;
    color: #666666;
  }
`

export default PostList
