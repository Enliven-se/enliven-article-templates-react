import React from 'react'

const ParticlePullquote = React.createClass({
  render: function() {
    return <div className={this.props.componentClasses}>
      <blockquote dangerouslySetInnerHTML={{
        __html: this.props.content
      }}></blockquote>
    </div>
  }
})

module.exports = ParticlePullquote
