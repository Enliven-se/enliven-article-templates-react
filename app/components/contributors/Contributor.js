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
      if (!props.ContributorAssociation) return null;
      return (
        <span className='contributor'>
            <Separator separatorType='/' />
            <ContributorAssociation classes='contributor-association' data={props.ContributorAssociation} />
        </span>
      )
    }

    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor'

    return (
      <span className={classes}>
          <Avatar classes='avatar' url={this.props.data.Avatar} />
          <ContributorRole classes='contributor-role' data={this.props.data.ContributorRole} />
          {' '}
          <ContributorLink classes='contributor-link' data={this.props.data.ContributorLink}>
              <ContributorCredit classes='contributor-credit' data={this.props.data.ContributorCredit} />
          </ContributorLink>
          {ifNotEmptyContributorAssociation(this.props.data) }
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
