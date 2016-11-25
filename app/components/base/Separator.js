import React from 'react'

const Separator = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses : ''
    classes += ' separator'

    return <span className={classes}>{this.props.separatorType}</span>
  }
})

module.exports = Separator
