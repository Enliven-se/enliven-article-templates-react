import React from 'react'


class MetaLinksContainer extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'meta-links'

    return <div className={classes}>{this.props.children}</div>
  }


}

export default MetaLinksContainer
