import React from 'react'
import { Image } from 'react-bootstrap'

const ParticleHeroImage = React.createClass({
  render: function() {
    return <div className={this.props.componentClasses}>
      <Image src={this.props.imageURL} responsive />
    </div>
  }
})

module.exports = ParticleHeroImage
