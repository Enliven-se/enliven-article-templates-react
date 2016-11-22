import React from 'react'
import { Image } from 'react-bootstrap'

const PhotoCredits = require('../../containers/PhotoCredits')

const ParticleImage = React.createClass({
  render: function() {
    return <div className={this.props.componentClasses}>
      <Image src={this.props.url} responsive />
      <PhotoCredits content={this.props.credits} className={this.props.componentClasses} className='photo-credits' />
    </div>
  }
})

module.exports = ParticleImage
