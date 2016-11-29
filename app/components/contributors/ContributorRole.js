import React from 'react'

const ContributorRole = React.createClass({
  render: function() {
    return <span className={this.props.classes}>{this.props.data}</span>
  }
})

module.exports = ContributorRole
