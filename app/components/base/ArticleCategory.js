import React from 'react'

const ArticleCategory = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'article-category'
    return <div className='article-category-wrapper'><a href={this.props.url} className={classes}>{this.props.content}</a></div>
  }
})

module.exports = ArticleCategory
