import React from 'react'


class ArticlesListContainer extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'articles-list'

    return <div className={classes}>{this.props.children}</div>
  }


}

export default ArticlesListContainer
