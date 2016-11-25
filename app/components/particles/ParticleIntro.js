import React from 'react'

const ParticleText = require('../particles/ParticleText')

const ParticleIntro = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'particle-intro'
    return <ParticleText componentClasses={classes} content={this.props.content} />
  }
})

module.exports = ParticleIntro
