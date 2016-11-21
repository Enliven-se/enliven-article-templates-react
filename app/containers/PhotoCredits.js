import React from 'react'

const PhotoCredits = React.createClass({
  render: function() {
    return <div className='{this.props.componentClasses}'>{this.props.children}</div>
  }
})

module.exports = PhotoCredits
