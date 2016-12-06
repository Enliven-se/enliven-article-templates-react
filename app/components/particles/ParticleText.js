import React from 'react'

const ParticleText = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes : ''
    classes += ' particle-text'

    return (
      <div className={classes} dangerouslySetInnerHTML={{
          __html: this.props.content.html
      }}></div>

    )
  }
})

module.exports = ParticleText
