import React from 'react'

const ContributorCredit = React.createClass({
  render: function() {
      var classes = this.props.classes ? this.props.classes + ' ' : ''
      classes += 'contributor-credit'

    return <span className={classes}>{this.props.data}</span>
  }
})

module.exports = ContributorCredit
