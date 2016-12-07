import React from 'react'
import { Image } from 'react-bootstrap'

class Avatar extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'avatar'

    return <span className='avatar-wrapper'>
        <Image src={this.props.url} className={classes} responsive />
    </span>
  }


}

export default Avatar
