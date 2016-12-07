import React from 'react'
import { Image } from 'react-bootstrap'

const Avatar = React.createClass({
  render: function() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'avatar'

    return <span className='avatar-wrapper'>
        <Image src={this.props.url} className={classes} responsive />
    </span>
  }
})

module.exports = Avatar
