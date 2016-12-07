import React from 'react'

class CharityCredit extends React.Component {
  render() {
    if (this.props.children) {
      return <div className={this.props.classes}>{this.props.children}</div>
    }
    return null
  }


}

export default CharityCredit
