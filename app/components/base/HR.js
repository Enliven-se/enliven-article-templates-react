import React from 'react'

const HR = React.createClass({
  render: function() {
    return <hr className={this.props.classes}>{this.props.children}</hr>
  }
})

module.exports = HR
