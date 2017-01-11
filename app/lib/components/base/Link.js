import React from 'react'

class Link extends React.Component {
  render() {
    if (!this.props.url)
      return null;

    return (
      <a href={this.props.url} title={this.props.title} className={this.props.classes}>{this.props.text}</a>
    )
  }


}

export default Link
