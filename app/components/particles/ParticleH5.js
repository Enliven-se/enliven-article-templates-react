import React from 'react'

const ParticleH5 = React.createClass({
  render: function() {
    return <h5 className={this.props.componentClasses}>{this.props.content}</h5>
  }
})

module.exports = ParticleH5
