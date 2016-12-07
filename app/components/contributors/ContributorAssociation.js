import React from 'react'

class ContributorAssociation extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor-association'

    return <span className={classes}>{this.props.data}</span>
  }


}

export default ContributorAssociation
