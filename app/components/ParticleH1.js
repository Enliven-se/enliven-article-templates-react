const React = window.React = require('react')

const ParticleH1 = React.createClass({
  render: function() {
    return <div className="">{this.props.particleName}</div>
  }
})

module.exports = ParticleH1
