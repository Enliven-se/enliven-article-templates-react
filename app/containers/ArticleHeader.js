import React from 'react'

const ArticleCategory = require('../components/base/ArticleCategory'),
  ArticleTitle = require('../components/base/ArticleTitle'),
  Icon = require('../components/base/Icon'),
  Link = require('../components/base/Link'),
  CharityCredit = require('../components/contributors/CharityCredit')

const ArticleHeader = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses + ' ' : ''
    classes += 'article-header'

    return (
      <div className={classes}>
        <ArticleCategory componentClasses={this.props.ArticleCategory.classes} content={this.props.ArticleCategory.content.html} url={this.props.ArticleCategory.content.url} />
        <CharityCredit>
          <Icon />
          <Link />
        </CharityCredit>
        <ArticleTitle componentClasses={this.props.ArticleTitle.classes} content={this.props.ArticleTitle.content.html} />
        {this.props.children}
      </div>
    )
  }
})

ArticleHeader.defaultProps = {
  ArticleCategory: {
    classes: '',
    content: {
      html: ''
    }
  }

}

module.exports = ArticleHeader
