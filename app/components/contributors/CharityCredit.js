import React from 'react'

const CharityCredit = React.createClass({
  render: function() {
    if (this.props.children) {
      return <div className={this.props.componentClasses}>{this.props.children}</div>
    }
    return null
  }
})

module.exports = CharityCredit
