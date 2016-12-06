import React from 'react'

const ParticleIntro = require('../particles/ParticleIntro'),
  HR = require('./HR')

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
          <ParticleIntro {...this.props} />
          <ArticleIntroBorder {...this.props} />
          {this.props.children}
      </div>
    )
  }
})

module.exports = ArticleIntro
