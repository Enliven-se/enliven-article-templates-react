import React from 'react'

const Icon = React.createClass({
  render: function() {
    if (!this.props.imageURL)
      return null;

    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'icon'

    return (
      <div className='icon-wrapper'><a href={this.props.url} title={this.props.title} className={classes}><img src={this.props.imageURL}/></a></div>
    )
  }
})

module.exports = Icon
