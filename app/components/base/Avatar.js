import React from 'react'
import { Image } from 'react-bootstrap'

const Avatar = React.createClass({
  render: function() {
    return <span className='avatar-wrapper'>
        <Image src={this.props.url} className={this.props.componentClasses} responsive />
    </span>
  }
})

module.exports = Avatar
