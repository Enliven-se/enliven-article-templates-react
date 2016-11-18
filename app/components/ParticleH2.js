const React = window.React = require('react')

const ParticleH2 = React.createClass({
  render: function() {
    return <div className="container">{this.props.particleName}</div>
  }
})

module.exports = ParticleH2
