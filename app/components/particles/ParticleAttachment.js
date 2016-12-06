import React from 'react';

const ParticleAttachment = React.createClass({
  render: function() {
    return <div className={this.props.classes}>{this.props.particleName}</div>
  }
})

module.exports = ParticleAttachment
