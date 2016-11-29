import React from 'react'

const ParticleIntro = require('../components/particles/ParticleIntro'),
  HR = require('../components/base/HR')

const ArticleIntro = React.createClass({
  render: function() {
    const ArticleIntroBorder = function(props) {
      var classes = props.classes ? props.classes : '';
      classes += ' article-intro-border'

      return (
      (props.bordered) ? <HR classes={classes} /> : null
      )
    }
    return (
      <div className={this.props.classes}>
          <ArticleIntroBorder {...this.props} />
          <ParticleIntro classes={this.props.data.classes} content={this.props.data.content.html} />
          <ArticleIntroBorder {...this.props} />
          {this.props.children}
      </div>
    )
  }
})

module.exports = ArticleIntro
