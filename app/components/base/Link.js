import React from 'react'

const Link = React.createClass({
  render: function() {
    if (!this.props.url)
      return null;

    return (
      <a href={this.props.url} title={this.props.title} className='link-wrapper'>{this.props.text}</a>
    )
  }
})

module.exports = Link
