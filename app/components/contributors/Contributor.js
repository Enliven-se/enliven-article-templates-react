import React, { PropTypes } from 'react'

const Avatar = require('../base/Avatar'),
  ContributorCredit = require('../contributors/ContributorCredit'),
  ContributorRole = require('../contributors/ContributorRole'),
  ContributorLink = require('../contributors/ContributorLink'),
  ContributorAssociation = require('../contributors/ContributorAssociation'),
  Separator = require('../base/Separator')

const Contributor = React.createClass({
  render: function() {
    const ifNotEmptyContributorAssociation = function(props) {
      return (
        <span>
          <Separator separatorType='/' />
          <ContributorAssociation componentClasses='contributor-association' data={this.props.data.ContributorAssociation} />
        </span>
      )
    }
    return (
      <span className={this.props.componentClasses}>
        <Avatar componentClasses='avatar' url={this.props.data.Avatar} />
        <ContributorRole componentClasses='contributor-role' data={this.props.data.ContributorRole} />
        <ContributorLink componentClasses='contributor-link' data={this.props.data.ContributorLink}>
          <ContributorCredit componentClasses='contributor-credit' data={this.props.data.ContributorCredit} />
        </ContributorLink>
        <ifNotEmptyContributorAssociation data={this.props.data} />
      </span>
    )
  }

})

Contributor.propTypes = {
  Avatar: PropTypes.string,
  ContributorRole: PropTypes.string,
  ContributorLink: PropTypes.string,
  ContributorCredit: PropTypes.string,
  ContributorAssociation: PropTypes.string
}

Contributor.defaultProps = {
  Avatar: '',
  ContributorRole: '',
  ContributorLink: '',
  ContributorCredit: '',
  ContributorAssociation: ''
}

module.exports = Contributor
