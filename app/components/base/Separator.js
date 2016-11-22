import React from 'react'

const Separator = React.createClass({
  render: function() {
    return <span className={this.props.componentClasses}>{this.props.children}</span>
  }
})

module.exports = Separator
