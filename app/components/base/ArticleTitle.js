import React from 'react'

const ParticleH1 = require('../particles/ParticleH1')

const ArticleTitle = React.createClass({
  render: function() {
    var classes = this.props.classes ? this.props.classes : ''
    classes += ' article-title'

    return (
      <div className='article-title-wrapper'>
          <ParticleH1 {...this.props} classes={classes} />
      </div>
    )
  }
})

module.exports = ArticleTitle
