import React from 'react'
import axios from 'axios'
import cookies from 'js-cookie'
import styled from 'styled-components'
import {
  Grid,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap'
import {createBlogPost} from '../api/consumers'

class CreatePost extends React.Component {
  state = {
    opacity: 0,
    title: '',
    description: '',
    content: '',
    submitting: false,
  }
  componentDidMount() {
    setTimeout(() => this.setState({opacity: 1}))
  }
  handleSubmit = e => {
    e.preventDefault()
    const formData = {
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
    }
    this.setState({submitting: true})
    const creationCallback = response => {
      let newState = {submitting: false}
      if (response.data.message === 'successful') {
        newState = {
          ...newState,
          title: '',
          description: '',
          submitting: '',
        }
      }
      this.setState(newState)
      console.log('response from server:', response)
    }
    createBlogPost(formData, creationCallback)
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  render() {
    return (
      <Grid
        fluid
        className={this.props.className}
        style={{
          opacity: this.state.opacity,
          transition: 'opacity 500ms ease-in-out',
        }}>
        <Col mdOffset={2} md={8}>
          <form className="create-post" onSubmit={this.handleSubmit}>
            <FormGroup controlId={1}>
              <ControlLabel>Title</ControlLabel>
              <NewFormControl
                type="text"
                value={this.state.title}
                id="title"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId={2}>
              <ControlLabel>Description</ControlLabel>
              <NewFormControl
                type="text"
                value={this.state.description}
                id="description"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId={3}>
              <ControlLabel>Content</ControlLabel>
              <NewFormControl
                componentClass="textarea"
                rows={5}
                value={this.state.content}
                id="content"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button
              type="submit"
              onClick={this.handleSubmit}
              block
              bsStyle={'primary'}
              disabled={this.state.submitting}>
              Create
            </Button>
          </form>
        </Col>
      </Grid>
    )
  }
}

const NewFormControl = styled(FormControl)`
  & {
    box-shadow: 0px 1px 3px grey;
    border-radius: 0px;
    border: none;
  }
`

export default styled(CreatePost)`
  & {
    button {
      background: linear-gradient(
        312deg,
        #14134e 0%,
        #512d5a 68%,
        #843b61 100%
      );
    }
  }
`
