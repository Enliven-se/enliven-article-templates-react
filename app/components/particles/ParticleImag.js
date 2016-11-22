import React from 'react'
import { Image } from 'react-bootstrap'

const ParticleImag = React.createClass({
  render: function() {
    return <div className='particle-imag'>
      <Image src={this.props.url} responsive />
    </div>
  }
})

module.exports = ParticleImag
