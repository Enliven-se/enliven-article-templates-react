import React from 'react'

const ArticleCategory = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'article-category'
    return <div className={classes}><a href='{this.props.url}'>{this.props.content}</a></div>
  }
})

module.exports = ArticleCategory
