import React from 'react'

const HeaderContributor = React.createClass({
  render: function() {
    return <div className='{this.props.componentClasses}'>{this.props.particleName}</div>
  }
})

module.exports = HeaderContributor
