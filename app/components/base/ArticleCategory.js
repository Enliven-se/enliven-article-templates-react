import React from 'react'

const ArticleCategory = React.createClass({
  render: function() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'article-category'
    return <div className='article-category-wrapper'><a href={this.props.content.url} className={classes}>{this.props.content.html}</a></div>
  }
})

module.exports = ArticleCategory
