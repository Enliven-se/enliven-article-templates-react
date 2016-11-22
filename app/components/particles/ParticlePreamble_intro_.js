import React from 'react'

const ParticleText = require('../particles/ParticleText')

const ParticlePreamble_intro_ = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'particle-intro'
    return <ParticleText componentClasses={classes} content={this.props.content} />
  }
})

module.exports = ParticlePreamble_intro_
