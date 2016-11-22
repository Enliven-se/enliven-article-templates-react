import React from 'react'

const ParticleH2 = React.createClass({
  render: function() {
    return <h2 className={this.props.componentClasses} dangerouslySetInnerHTML={{
        __html: this.props.content
      }} />
  }
})

module.exports = ParticleH2
