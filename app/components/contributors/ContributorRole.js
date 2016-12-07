import React from 'react'

const ContributorRole = React.createClass({
  render: function() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor-role'

    return <span className={classes}>{this.props.data}</span>
  }
})

module.exports = ContributorRole
