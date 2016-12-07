import React from 'react'

import ParticleText from '../particles/ParticleText'

class ParticleIntro extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'particle-intro'
    return <ParticleText {...this.props} classes={classes} />
  }


}

export default ParticleIntro
