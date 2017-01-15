import React from 'react'


class SquareArticleContainer extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'square-article'

    return <div className={classes}>{this.props.children}</div>
  }


}

export default SquareArticleContainer
