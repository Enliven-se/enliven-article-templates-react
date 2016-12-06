import React from 'react'

const ContributorLink = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor-link'

    return <a href={this.props.data.url} className={classes}>{this.props.children}</a>
  }
})

module.exports = ContributorLink
