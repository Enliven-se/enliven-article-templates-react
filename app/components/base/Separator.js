import React from 'react'

const Separator = React.createClass({
  render: function() {
    return <span className={this.props.componentClasses}>{this.props.separatorType}</span>
  }
})

module.exports = Separator
