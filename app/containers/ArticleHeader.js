import React from 'react'

const ArticleCategory = require('../components/base/ArticleCategory'),
  ArticleTitle = require('../components/base/ArticleTitle')

const ArticleHeader = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'article-header'

    return (
      <div className={classes}>
        <ArticleCategory componentClasses={this.props.ArticleCategory.classes} content={this.props.ArticleCategory.content.html} />
        <ArticleTitle componentClasses={this.props.ArticleTitle.classes} content={this.props.ArticleTitle.content.html} />
        {this.props.children}
      </div>
    )
  }
})

module.exports = ArticleHeader
