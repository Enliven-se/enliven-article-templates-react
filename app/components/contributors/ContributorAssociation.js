import React from 'react'

const ContributorAssociation = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor-association'

    return <span className={classes}>{this.props.data}</span>
  }
})

module.exports = ContributorAssociation
