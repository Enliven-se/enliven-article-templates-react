import React from 'react'
import { Image } from 'react-bootstrap'

const ParticleImage = React.createClass({
  render: function() {
    return <div className={this.props.componentClasses}>
      <Image src={this.props.url} responsive />
    </div>
  }
})

module.exports = ParticleImage
