import React from 'react'

import ParticleH1 from '../particles/ParticleH1'

class ArticleTitle extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'article-title'

    return (
      <div className='article-title-wrapper'>
          <ParticleH1 {...this.props} classes={classes} />
      </div>
    )
  }


}

export default ArticleTitle
