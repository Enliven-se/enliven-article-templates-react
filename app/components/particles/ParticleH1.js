import React from 'react'

const ParticleH1 = React.createClass({
  render: function() {
    return <h1 className={this.props.componentClasses} dangerouslySetInnerHTML={{
        __html: this.props.content
      }} />
  }
})

module.exports = ParticleH1
