import React from 'react'

const ParticleH2 = React.createClass({
  render: function() {
    return <h2 className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.content.html
      }} />
  }
})

module.exports = ParticleH2
