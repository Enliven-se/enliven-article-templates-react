import React from 'react'
import { Image } from 'react-bootstrap'

class ParticleHeroImage extends React.Component {
  render() {
    return <div className={this.props.classes}>
      <Image src={this.props.url} responsive />
    </div>
  }


}

export default ParticleHeroImage
