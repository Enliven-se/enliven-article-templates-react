import React from 'react'
import { Image } from 'react-bootstrap'

const ParticleHeroImage = React.createClass({
  render: function() {
    return <div className='particle-hero-image'>
      <Image src={this.props.imageURL} responsive />
    </div>
  }
})

module.exports = ParticleHeroImage
