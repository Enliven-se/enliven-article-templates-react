import React from 'react'

import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'
import ParticleSubheader from '../components/particles/ParticleSubheader'

class AboutContributorContainer extends React.Component {
  render() {
    let classes = this.props.classes
      ? this.props.classes + ' '
      : ''
    classes += 'about-contributor'

    return (
      <div className={classes}>
          <ParticleImage {...this.props.profile_image}/>
          <ParticleSubheader headerLevel='2' className='heading-text' value={this.props.full_name}/>
          <ParticleSubheader headerLevel='3' value={this.props.main_topics}/>
          <ParticleText value={this.props.about_you}/>
      </div>
    )
  }

}

export default AboutContributorContainer
