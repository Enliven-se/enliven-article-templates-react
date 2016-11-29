import React from 'react'

const ContributorAssociation = React.createClass({
  render: function() {
    return <div className={this.props.classes}>{this.props.content}</div>
  }
})

module.exports = ContributorAssociation
