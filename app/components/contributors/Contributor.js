import React, { PropTypes } from 'react'

const Avatar = require('../base/Avatar'),
  ContributorCredit = require('../contributors/ContributorCredit'),
  ContributorRole = require('../contributors/ContributorRole'),
  ContributorLink = require('../contributors/ContributorLink'),
  ContributorAssociation = require('../contributors/ContributorAssociation'),
  Separator = require('../base/Separator')

const Contributor = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor'

    const ifAvatar = this.props.data.Avatar ?
      (
      <Avatar classes='avatar' url={this.props.data.Avatar} />
      )
      : ''

    const ifContributorRole = this.props.data.ContributorRole ?
      (
      <span>
          <ContributorRole classes='contributor-role' data={this.props.data.ContributorRole} />
          <Separator separatorType=' ' />
      </span>
      )
      : ''

    const ifContributorLink = this.props.data.ContributorLink ?
      (
      <ContributorLink classes='contributor-link' data={this.props.data.ContributorLink}>
          <ContributorCredit classes='contributor-credit' data={this.props.data.ContributorCredit} />
      </ContributorLink>
      )
      : ''

    const ifContributorAssociation = this.props.data.ContributorAssociation ?
      (
      <span className='contributor'>
          <Separator separatorType=' /' />
          <ContributorLink classes='contributor-link' data={this.props.data.ContributorAssociationLink}>
              <ContributorAssociation classes='contributor-association' data={this.props.data.ContributorAssociation} />
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
