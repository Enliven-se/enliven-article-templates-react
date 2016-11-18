const React = window.React = require('react')

const ParticleAttachment = React.createClass({
  render: function() {
    return <div className="container">{this.props.particleName}</div>
  }
})

module.exports = ParticleAttachment
