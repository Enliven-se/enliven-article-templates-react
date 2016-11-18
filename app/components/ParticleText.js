import React from 'react'

const ParticleText = React.createClass({
  render: function() {
    return <div className='particle-text'>{this.props.particleName}</div>
  }
})

module.exports = ParticleText
