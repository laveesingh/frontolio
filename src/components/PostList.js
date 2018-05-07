import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-bootstrap'

class PostList extends React.Component {
  state = {
    postsList: [],
    opacity: 0,
  }

  componentWillMount() {
    axios({
      url: 'http://localhost:8000/blog/post/list/',
      method: 'get',
    }).then(response => this.setState({postsList: response.data.posts}))
  }

  componentWillUpdate() {
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
          <Col md={4}>
            <PostCard {...post.fields} />
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
      opacity: 1.0;
      box-shadow: 10px 10px 20px grey;
    }
  }
  .title {
    background-image: linear-gradient(312deg, #14134e 0%, #512d5a 68%, #843b61 100%);
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

export default PostList
