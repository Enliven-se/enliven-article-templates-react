import React from 'react'

class ContributorRole extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor-role'

    return <span className={classes}>{this.props.data}</span>
  }


}

export default ContributorRole
