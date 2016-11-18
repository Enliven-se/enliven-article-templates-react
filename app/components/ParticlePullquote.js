import React from 'react'

const ParticlePullquote = React.createClass({
  render: function() {
    return <div className='particle-pullquote'>
      <blockquote>{this.props.particleName}</blockquote>
    </div>
  }
})

module.exports = ParticlePullquote
