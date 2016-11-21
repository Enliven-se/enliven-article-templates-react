import React from 'react'
import { Image } from 'react-bootstrap'

const Avatar = React.createClass({
  render: function() {
    return <span className={this.props.componentClasses}>
      <Image src={this.props.url} responsive />
    </span>
  }
})

module.exports = Avatar
