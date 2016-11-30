import React from 'react'
import { Image } from 'react-bootstrap'

const PhotoCredits = require('../../containers/PhotoCredits')

const ParticleImage = React.createClass({
  render: function() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    // let classes_image = classes + 'particle-image'
    let classes_image = 'particle-image'
    let classes_credits = classes

    if (this.props.field_corner_option) {
      classes_credits += ' ' + this.props.field_corner_option
    }

    return (
      <div className={classes_image}>
          <Image src={this.props.url} responsive />
          <PhotoCredits content={this.props.credits} classes={classes_credits} />
      </div>
    )
  }
})

module.exports = ParticleImage
