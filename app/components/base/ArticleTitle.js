import React from 'react'

const ArticleTitle = React.createClass({
  render: function() {
    return <div className={this.props.componentClasses}>{this.props.content}</div>
  }
})

module.exports = ArticleTitle
