import React from 'react'

const ArticleCategory = require('../components/base/ArticleCategory'),
  ArticleTitle = require('../components/base/ArticleTitle'),
  Icon = require('../components/base/Icon'),
  Link = require('../components/base/Link'),
  CharityCredit = require('../components/contributors/CharityCredit')

const ArticleHeader = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'article-header'

    return (
      <div className={classes}>
          {this.props.ArticleCategory ?
              <ArticleCategory {...this.props.ArticleCategory} />
          : '' }
          <CharityCredit>
              <Icon />
              <Link />
          </CharityCredit>
          {this.props.ArticleTitle ?
              <ArticleTitle classes={this.props.ArticleTitle.classes} content={this.props.ArticleTitle.content.html} />
          : ''}
          {this.props.children}

      </div>
    )
  }
})

module.exports = ArticleHeader
