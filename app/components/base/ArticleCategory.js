import React from 'react'

const ArticleCategory = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'article-category'
    return <div className={classes}>{this.props.content}</div>
  }
})

module.exports = ArticleCategory
