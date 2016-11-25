import React from 'react'

const Separator = React.createClass({
  render: function() {
    let classes = this.props.componentClasses ? this.props.componentClasses : ''
    classes += ' separator'

    let space = this.props.space ? this.props.space : ' '
    return <span className={classes}>{this.props.separatorType}{space}</span>
  }
})

module.exports = Separator
