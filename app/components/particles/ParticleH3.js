import React from 'react'

const ParticleH3 = React.createClass({
  render: function() {
    return <h3 className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.content.html
      }}></h3>
  }
})

module.exports = ParticleH3
