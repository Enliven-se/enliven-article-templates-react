import React from 'react'

const ParticleH1 = require('../particles/ParticleH1')

const ArticleTitle = React.createClass({
  render: function() {
    var classes = this.props.componentClasses ? this.props.componentClasses : ''
    classes += ' article-title'

    return (
      <div className='article-title-wrapper'>
          <ParticleH1 componentClasses={classes} content={this.props.content} />
      </div>
    )
  }
})

module.exports = ArticleTitle
