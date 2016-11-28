import React from 'react'
import { Image } from 'react-bootstrap'

const PhotoCredits = require('../../containers/PhotoCredits')

const ParticleImage = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'particle-image'

    return (
      <div className={classes}>
            <Image src={this.props.url} responsive />
            <PhotoCredits content={this.props.credits} className={this.props.componentClasses} />
        </div>
    )
  }
})

module.exports = ParticleImage
