const React = window.React = require('react')

const ParticleAttachment = React.createClass({
  render: function() {
    return <div className="">{this.props.particleName}</div>
  }
})

module.exports = ParticleAttachment
