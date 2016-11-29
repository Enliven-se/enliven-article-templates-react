import React from 'react'

const ContributorAssociation = React.createClass({
  render: function() {
    return <span className={this.props.classes}>{this.props.data}</span>
  }
})

module.exports = ContributorAssociation
