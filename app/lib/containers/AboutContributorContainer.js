import React from 'react'

import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'
import ParticleH2 from '../components/particles/ParticleH2'
import ParticleH3 from '../components/particles/ParticleH3'

class AboutContributorContainer extends React.Component {
  render() {
    let classes = this.props.classes
      ? this.props.classes + ' '
      : ''
    classes += 'about-contributor'

    return (
      <div className={classes}>
          <ParticleImage {...this.props.ParticleImage}/>
          <ParticleH2 className='heading-text' value={this.props.ParticleH2}/>
          <ParticleH3 value={this.props.ParticleH3}/>
          <ParticleText value={this.props.ParticleText}/>
      </div>
    )
  }

}

export default AboutContributorContainer
