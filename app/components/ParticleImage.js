import React from 'react'
import { Image } from 'react-bootstrap'

const ParticleImage = React.createClass({
  render: function() {
    return <div className='particle-image'>
        <Image src={this.props.imageURL} responsive />
    </div>
  }
})

module.exports = ParticleImage
