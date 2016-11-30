import React from 'react'
import ReactDOM from 'react-dom'

import reactCSS from 'reactcss'

export default class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  render() {
    const styles = reactCSS({
      'default': {
        wrapper: {
          border: '1px solid black',
          display: 'inline-block',
          marginRight: 5,
          padding: 5
        }
      },
      'hover': {
        wrapper: {
          backgroundColor: '#000',
          color: '#fff'
        }
      },
      'disabled': {
        wrapper: {
          border: '1px solid #bbb',
          color: '#bbb'
        }
      }
    }, {
      'hover': !this.props.disabled && this.state.hover,
      'disabled': this.props.disabled
    })
    console.log(this.props.disabled)

    return <div
      style={Object.assign(styles.wrapper, this.props.style)}
      onClick={!this.props.disabled && this.props.onClick}
      onMouseOver={() => this.setState({hover: true})}
      onMouseOut={() => this.setState({hover: false})}>
      {this.props.children}
    </div>
  }
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false
}