import React from 'react'


class AboutContributorContainer extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'about-contributor'

    return <div className={classes}>{this.props.children}</div>
  }


}

export default AboutContributorContainer
