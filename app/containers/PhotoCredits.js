import React from 'react'

const ParticleText = require('../components/particles/ParticleText')

const PhotoCredits = React.createClass({
  render: function() {
    return <ParticleText componentClasses={classes} content={this.props.content} />
  }
})

module.exports = PhotoCredits
