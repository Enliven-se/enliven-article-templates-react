const React = window.React = require('react')

const ParticleH3 = React.createClass({
  render: function() {
    return <div className="container">{this.props.particleName}</div>
  }
})

module.exports = ParticleH3
