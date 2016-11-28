import React from 'react'

const ParticleText = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses : ''
    classes += ' particle-text'

    return (
      <div className={classes} dangerouslySetInnerHTML={{
        __html: this.props.content
      }}></div>

    )
  }
})

module.exports = ParticleText
