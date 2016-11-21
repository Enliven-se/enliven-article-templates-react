import React from 'react'

const ContributorCredit = React.createClass({
  render: function() {
    return <span className={this.props.componentClasses}>{this.props.data}</span>
  }
})

module.exports = ContributorCredit
