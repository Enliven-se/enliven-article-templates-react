const React = window.React = require('react')

const ParticleText = React.createClass({
  render: function() {
    return <div className="container">{this.props.particleName}</div>
  }
})

module.exports = ParticleText
