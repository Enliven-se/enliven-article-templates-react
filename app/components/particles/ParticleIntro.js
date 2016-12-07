import React from 'react'

const ParticleText = require('../particles/ParticleText')

const ParticleIntro = React.createClass({
  render: function() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'particle-intro'
    return <ParticleText {...this.props} classes={classes} />
  }
})

module.exports = ParticleIntro
