import React from 'react'

const ContributorLink = React.createClass({
  render: function() {
    return <a href={this.props.data.url} className={this.props.componentClasses}>{this.props.children}</a>
  }
})

module.exports = ContributorLink
