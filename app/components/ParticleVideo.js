import React from 'react'

const ParticleVideo = React.createClass({
  render: function() {
    return <div className='particle-video'>{this.props.particleName}</div>
  }
})

module.exports = ParticleVideo
