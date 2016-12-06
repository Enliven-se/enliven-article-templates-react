import React from 'react'

const ParticleH4 = React.createClass({
  render: function() {
    return <h4 className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.content.html
      }}></h4>
  }
})

module.exports = ParticleH4
