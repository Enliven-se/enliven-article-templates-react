import React from 'react'

const ParticlePullquote = React.createClass({
  render: function() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'particle-pullquote'

    return (
      <div className={classes}>
          <blockquote className={classes} dangerouslySetInnerHTML={{
              __html: this.props.content.html
      }}></blockquote>
      </div>
    )
  }
})

module.exports = ParticlePullquote
