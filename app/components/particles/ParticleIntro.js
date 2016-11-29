import React from 'react'

const ParticleText = require('../particles/ParticleText')

const ParticleIntro = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'particle-intro'
    return <ParticleText classes={classes} content={this.props.content} />
  }
})

module.exports = ParticleIntro
