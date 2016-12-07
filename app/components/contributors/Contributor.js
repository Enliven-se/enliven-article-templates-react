import React, { PropTypes } from 'react'

const Avatar = require('../base/Avatar'),
  ContributorCredit = require('../contributors/ContributorCredit'),
  ContributorRole = require('../contributors/ContributorRole'),
  ContributorLink = require('../contributors/ContributorLink'),
  ContributorAssociation = require('../contributors/ContributorAssociation'),
  Separator = require('../base/Separator')

const Contributor = React.createClass({
  render: function() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor'

    const ifAvatar = this.props.Avatar ?
      (
      <Avatar url={this.props.Avatar} />
      )
      : ''

    const ifContributorRole = this.props.ContributorRole ?
      (
      <span>
          <ContributorRole data={this.props.ContributorRole} />
          <Separator separatorType=' ' />
      </span>
      )
      : ''

    const ifContributorLink = this.props.ContributorLink ?
      (
      <ContributorLink data={this.props.ContributorLink}>
          <ContributorCredit data={this.props.ContributorCredit} />
      </ContributorLink>
      )
      : ''

    const ifContributorAssociation = this.props.ContributorAssociation ?
      (
      <span className='contributor'>
          <Separator separatorType=' /' />
          <ContributorLink data={this.props.ContributorAssociationLink}>
              <ContributorAssociation data={this.props.ContributorAssociation} />
          </ContributorLink>
      </span>
      )
      : ''

    return (
      <span className={classes}>
          {ifAvatar}
          {ifContributorRole}
          {ifContributorLink}
          {ifContributorAssociation}
      </span>
    )
  }

})

Contributor.propTypes = {
  Avatar: PropTypes.string,
  ContributorRole: PropTypes.string,
  ContributorLink: PropTypes.object,
  ContributorCredit: PropTypes.string,
  ContributorAssociation: PropTypes.string
}

module.exports = Contributor
