import React from 'react'

const DatePublished = React.createClass({
  render: function() {
    return <div className='{this.props.componentClasses}'>{this.props.children}</div>
  }
})

module.exports = DatePublished
