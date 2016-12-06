import React from 'react'
import { Image } from 'react-bootstrap'

const PhotoCredits = require('../../containers/PhotoCredits')

const ParticleImage = React.createClass({
  render: function() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    let classes_credits = this.props.credits && this.props.credits.classes ? this.props.credits.classes + ' ' : ''
    classes += 'particle-image'

    if (this.props.field_corner_option) {
      classes_credits += ' ' + this.props.field_corner_option
    }

    return (
      <div className={classes}>
          <Image src={this.props.content.url} responsive />
          <PhotoCredits {...this.props} classes={classes_credits} />
      </div>
    )
  }
})

module.exports = ParticleImage
