import React from 'react'

class ArticleCategory extends React.Component {
  render() {
    let classes = this.props.classes
      ? this.props.classes + ' '
      : ''
    classes += 'article-category'
    return <div className='article-category-wrapper'>
        <a href={this.props.url} className={classes}>{this.props.name}</a>
        </div>
  }

}

export default ArticleCategory
