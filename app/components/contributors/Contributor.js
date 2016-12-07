import React, {PropTypes} from 'react'

import Avatar from '../base/Avatar'
import ContributorCredit from '../contributors/ContributorCredit'
import ContributorRole from '../contributors/ContributorRole'
import ContributorLink from '../contributors/ContributorLink'
import ContributorAssociation from '../contributors/ContributorAssociation'
import Separator from '../base/Separator'

class Contributor extends React.Component {
    render() {
        let classes = this.props.classes
            ? this.props.classes + ' '
            : ''
        classes += 'contributor'

        const ifAvatar = this.props.Avatar
            ? (<Avatar url={this.props.Avatar}/>)
            : ''

        const ifContributorRole = this.props.ContributorRole
            ? (
                <span>
                    <ContributorRole data={this.props.ContributorRole}/>
                    <Separator separatorType=' '/>
                </span>
            )
            : ''

        const ifContributorLink = this.props.ContributorLink
            ? (
                <ContributorLink data={this.props.ContributorLink}>
                    <ContributorCredit data={this.props.ContributorCredit}/>
                </ContributorLink>
            )
            : ''

        const ifContributorAssociation = this.props.ContributorAssociation
            ? (
                <span className='contributor'>
                    <Separator separatorType=' /'/>
                    <ContributorLink data={this.props.ContributorAssociationLink}>
                        <ContributorAssociation data={this.props.ContributorAssociation}/>
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
}

Contributor.propTypes = {
    Avatar: PropTypes.string,
    ContributorRole: PropTypes.string,
    ContributorLink: PropTypes.object,
    ContributorCredit: PropTypes.string,
    ContributorAssociation: PropTypes.string
}

export default Contributor
