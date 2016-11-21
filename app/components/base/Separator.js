import React from 'react'

const Separator = React.createClass({
  render: function() {
    return <div className={this.props.componentClasses}>{this.props.children}</div>
  }
})

module.exports = Separator
