import React from 'react'

class ContributorLink extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor-link'

    return <a href={this.props.url} className={classes}>{this.props.children}</a>
  }


}

export default ContributorLink
