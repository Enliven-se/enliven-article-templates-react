import React from 'react'

import ParticleHeader from './ParticleHeader'

class ParticleSubheader extends React.Component {
  render() {
    const headerLevel = this.props.headerLevel ? this.props.headerLevel : 2

    return <ParticleHeader {...this.props} headerLevel={headerLevel} />
  }
}

export default ParticleSubheader
