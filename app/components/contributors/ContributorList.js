import React from 'react'

const ContributorList = React.createClass({
  render: function() {
    return <span className={this.props.componentClasses}>{this.props.children}</span>
  }
})

module.exports = ContributorList
