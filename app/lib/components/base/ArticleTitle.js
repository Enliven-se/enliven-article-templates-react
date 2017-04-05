import React from 'react'

import ParticleHeader from '../particles/ParticleHeader'

class ArticleTitle extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'article-title'

    return (
      <div className='article-title-wrapper'>
          <ParticleHeader {...this.props} classes={classes} />
      </div>
    )
  }


}

export default ArticleTitle
