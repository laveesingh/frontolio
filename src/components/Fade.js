import React from 'react'

export default class Fade extends React.Component {
  state = {
    opacity: 0,
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({
        opacity: 1,
      }),
    )
  }

  render() {
    let {ease, timeout, children, ...otherProps} = this.props
    const styles = {
      transition: `opacity ${timeout || '500ms'} ${ease || 'linear'}`,
      opacity: this.state.opacity,
    }
    return (
      <div style={styles} {...otherProps}>
        {children}
      </div>
    )
  }
}
