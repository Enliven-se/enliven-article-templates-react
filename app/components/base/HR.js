import React from 'react'

class HR extends React.Component {
  render() {
    return <hr className={this.props.classes}>{this.props.children}</hr>
  }


}

export default HR
