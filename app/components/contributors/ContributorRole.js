import React from 'react'

const ContributorRole = React.createClass({
  render: function() {
    return <span className={this.props.componentClasses}>{this.props.data}</span>
  }
})

module.exports = ContributorRole
