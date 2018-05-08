import React from 'react'

export default class Slide extends React.Component {
  state = {
    left: getRandomTrue() ? -2000 : 2000,
    top: getRandomTrue() ? -2000 : 2000,
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({
        left: 0,
        top: 0,
      }),
    )
  }

  render() {
    let {ease, timeout, children, ...otherProps} = this.props
    const styles = {
      transition: `${getRandomTrue() ? 'left' : 'top'} ${timeout ||
        Math.random() * 2}s ${ease || 'linear'}`,
      left: `${this.state.left}px`,
      top: `${this.state.top}px`,
      position: 'relative',
    }
    return (
      <div style={styles} {...otherProps}>
        {children}
      </div>
    )
  }
}

const getRandomTrue = () => Math.random() > 0.5
