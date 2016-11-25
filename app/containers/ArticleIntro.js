import React from 'react'

const ParticleIntro = require('../components/particles/ParticleIntro'),
  HR = require('../components/base/HR')

const ArticleIntro = React.createClass({
  render: function() {
    const ArticleIntroBorder = function(props) {
      var classes = props.componentClasses ? props.componentClasses : '';
      classes += ' article-intro-border'

      return (
      (props.bordered) ? <HR componentClasses={classes} /> : null
      )
    }
    return (
      <div className={this.props.componentClasses}>
          <ArticleIntroBorder {...this.props} />
          <ParticleIntro componentClasses={this.props.data.classes} content={this.props.data.content.html} />
          <ArticleIntroBorder {...this.props} />
          {this.props.children}
      </div>
    )
  }
})

module.exports = ArticleIntro
