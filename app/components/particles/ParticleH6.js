import React from 'react'

const ParticleH6 = React.createClass({
  render: function() {
    return <h6 className={this.props.componentClasses}>{this.props.content}</h6>
  }
})

module.exports = ParticleH6
