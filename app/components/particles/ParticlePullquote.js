import React from 'react'

const ParticlePullquote = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'particle-pullquote'

    return (
      <div className={classes}>
          <blockquote className={classes} dangerouslySetInnerHTML={{
        __html: this.props.content
      }}></blockquote>
      </div>
    )
  }
})

module.exports = ParticlePullquote
