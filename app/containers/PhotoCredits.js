import React from 'react'

const ParticleText = require('../components/particles/ParticleText')

const PhotoCredits = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'photo-credits'

    return <ParticleText componentClasses={classes} content={this.props.content} />
  }
})

module.exports = PhotoCredits
