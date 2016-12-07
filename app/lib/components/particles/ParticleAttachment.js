import React from 'react';

class ParticleAttachment extends React.Component {
  render() {
    return <div className={this.props.classes}>{this.props.particleName}</div>
  }


}

export default ParticleAttachment
