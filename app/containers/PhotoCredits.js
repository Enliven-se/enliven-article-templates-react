import React from 'react'

const ParticleText = require('../components/particles/ParticleText')

const PhotoCredits = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'photo-credits'

    let output = this.props.credits ?
      (
      <div className='credit-container'>
          <ParticleText content={this.props.credits} classes={classes} />
      </div>
      )
      : null

    return output
  }
})

module.exports = PhotoCredits
