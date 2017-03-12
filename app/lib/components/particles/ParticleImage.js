import React from 'react'
import { Image } from 'react-bootstrap'

import PhotoCredits from '../../containers/PhotoCredits'

class ParticleImage extends React.Component {
  render() {
      const url = this.props.field_assets && this.props.field_assets.length > 0
        ? this.props.field_assets[0].file.url
        : this.props.url

    let classes = this.props.classes ? this.props.classes + ' ' : ''
    let classes_credits = this.props.credits && this.props.credits.classes ? this.props.credits.classes + ' ' : ''
    classes += 'particle-image'

    if (this.props.field_corner_option) {
      classes_credits += ' ' + this.props.field_corner_option
    }

    return (
      <div className={classes}>
          <Image src={url} responsive />
          <PhotoCredits {...this.props} classes={classes_credits} />
      </div>
    )
  }


}

export default ParticleImage
