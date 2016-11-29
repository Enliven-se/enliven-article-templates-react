import React from 'react'
import { Image } from 'react-bootstrap'

const ParticleHeroImage = React.createClass({
  render: function() {
    return <div className={this.props.classes}>
      <Image src={this.props.url} responsive />
    </div>
  }
})

module.exports = ParticleHeroImage
