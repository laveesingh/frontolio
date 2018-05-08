import React from 'react'
import {Route, Link} from 'react-router-dom'
import {Grid, Row, Col, Nav, NavItem} from 'react-bootstrap'
import styled from 'styled-components'
import CreatePost from './CreatePost'
import PostList from './PostList'
import PostView from './PostView'

class Blog extends React.Component {
  state = {
    opacity: 0,
    activeTabKey: 1,
  }

  componentDidMount() {
    setTimeout(() => this.setState({opacity: 1}))
    if (this.props.location.pathname.match('/blog/create')) {
      this.setState({activeTabKey: 1})
    } else {
      this.setState({activeTabKey: 2})
    }
  }

  handleSelect = key => this.setState({activeTabKey: key})

  render() {
    return (
      <Grid
        className={this.props.className}
        style={{
          opacity: this.state.opacity,
          transition: 'opacity 600ms ease-in-out',
        }}>
        <Row>
          <Col md={2}>
            <Nav
              stacked
              activeKey={this.state.activeTabKey}
              onSelect={this.handleSelect}>
              <NavItem
                eventKey={1}
                href="/blog/create"
                to="/blog/create"
                componentClass={Link}>
                Create New
              </NavItem>
              <NavItem
                eventKey={2}
                href="/blog/list"
                to="/blog/list"
                componentClass={Link}>
                List
              </NavItem>
              <NavItem
                eventKey={3}
                href="/blog/list"
                to="/blog/list"
                componentClass={Link}>
                Search
              </NavItem>
            </Nav>
          </Col>
          <Col md={10}>
            <Route exact path="/" render={props => <PostList {...props} />} />
            <Route
              exact
              path="/blog"
              render={props => <PostList {...props} />}
            />
            <Route
              path="/blog/create"
              render={props => <CreatePost {...props} />}
            />
            <Route
              path="/blog/list"
              render={props => <PostList {...props} />}
            />
            <Route
              path="/blog/post/:id"
              render={props => <PostView {...props} />}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default styled(Blog)`
  & {
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    background: white;
    box-shadow: 0px 0px 5px grey;
  }
  .nav .active {
    filter: invert(100%);
  }
  .nav a {
    font-weight: 650;
    font-size: 18px;
  }
`
