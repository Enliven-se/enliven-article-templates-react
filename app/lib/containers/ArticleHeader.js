import React from 'react'

import ArticleCategory from '../components/base/ArticleCategory'
import ArticleTitle from '../components/base/ArticleTitle'
import Icon from '../components/base/Icon'
import Link from '../components/base/Link'
import CharityCredit from '../components/contributors/CharityCredit'

class ArticleHeader extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'article-header'

    return (
      <div className={classes}>
          {this.props.ArticleCategory ?
              <ArticleCategory
                  name={this.props.ArticleCategory.name}
                  url={this.props.ArticleCategory.url}
                  classes={this.props.ArticleCategory.classes}
              />
          : '' }
          <CharityCredit>
              <Icon />
              <Link />
          </CharityCredit>
          {this.props.ArticleTitle ?
              <ArticleTitle
                  {...this.props.ArticleTitle}
              />
          : ''}
      </div>
    )
  }


}

export default ArticleHeader
