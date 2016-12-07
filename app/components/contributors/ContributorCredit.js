import React from 'react'

class ContributorCredit extends React.Component {
  render() {
      let classes = this.props.classes ? this.props.classes + ' ' : ''
      classes += 'contributor-credit'

    return <span className={classes}>{this.props.data}</span>
  }


}

export default ContributorCredit
