import React from 'react'

const ArticleCategory = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'article-category'
    return <div className='article-category-wrapper'><a href={this.props.url} className={classes}>{this.props.content}</a></div>
  }
})

module.exports = ArticleCategory
