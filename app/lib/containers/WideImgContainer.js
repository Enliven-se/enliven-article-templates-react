import React from 'react'


class WideImgContainer extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'wide-img'

    return <div className={classes}>{this.props.children}</div>
  }


}

export default WideImgContainer
