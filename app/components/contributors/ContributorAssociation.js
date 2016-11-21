import React from 'react'

const ContributorAssociation = React.createClass({
  render: function() {
    return <div className={this.props.componentClasses}>{this.props.children}</div>
  }
})

module.exports = ContributorAssociation
