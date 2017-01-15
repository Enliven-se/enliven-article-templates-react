import React from 'react'


class ArticleTeaser extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    // classes += ''

    return <div className={classes}>{this.props.children}</div>
  }


}

export default ArticleTeaser
