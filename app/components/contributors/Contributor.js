import React from 'react'
const Avatar = require('../base/Avatar'),
  ContributorCredit = require('../contributors/ContributorCredit'),
  ContributorRole = require('../contributors/ContributorRole'),
  ContributorLink = require('../contributors/ContributorLink')

const Contributor = React.createClass({
  render: function() {
    return (
      <span className={this.props.componentClasses}>
        <Avatar componentClasses='avatar' url={this.props.data.Avatar} />
        <ContributorRole componentClasses='contributor-role' data={this.props.data.ContributorRole} />
        <ContributorLink componentClasses='contributor-link' data={this.props.data.ContributorLink}>
          <ContributorCredit componentClasses='contributor-credit' data={this.props.data.ContributorCredit} />
        </ContributorLink>
      </span>
    )
  }
})

module.exports = Contributor
