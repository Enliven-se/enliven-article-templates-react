const React = window.React = require('react')

const ParticlePullquote = React.createClass({
  render: function() {
    return <div className="container">{this.props.particleName}</div>
  }
})

module.exports = ParticlePullquote
