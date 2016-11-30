import React from 'react'

const ParticleText = require('../components/particles/ParticleText')

const PhotoCredits = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'photo-credits'

    return (
      <div className='credit-container'>
          <ParticleText classes={classes} content={this.props.content} />
      </div>
    )
  }
})

module.exports = PhotoCredits
