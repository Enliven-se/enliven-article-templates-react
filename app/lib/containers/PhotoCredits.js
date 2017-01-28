import React from 'react'

import ParticleText from '../components/particles/ParticleText'

class PhotoCredits extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'photo-credits'

    let output = this.props.credits ?
      (
      <div className='credit-container'>
          <ParticleText {...this.props.credits} classes={classes} />
      </div>
      )
      : null

    return output
  }


}

export default PhotoCredits
