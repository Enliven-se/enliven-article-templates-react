import React from 'react'

const ParticleText = require('../components/particles/ParticleText')

const PhotoCredits = React.createClass({
  render: function() {
    return <ParticleText componentClasses={this.props.componentClasses} content={this.props.content} />
  }
})

module.exports = PhotoCredits
