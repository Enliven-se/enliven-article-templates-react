import React from 'react'

const Link = React.createClass({
  render: function() {
    return <div className={this.props.componentClasses}>{this.props.children}</div>
  }
})

module.exports = Link
