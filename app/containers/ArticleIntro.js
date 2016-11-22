import React from 'react'

const ParticlePreamble_intro_ = require('../components/particles/ParticlePreamble_intro_'),
  HR = require('../components/base/HR')

const ArticleIntro = React.createClass({
  render: function() {
    const ArticleIntroBorder = function(props) {
      return (
      (props.bordered) ? <HR componentClasses={props.componentClasses + ' hr'} /> : null
      )
    }
    return (
      <div className={this.props.componentClasses}>
        <ArticleIntroBorder {...this.props} />
        <ParticlePreamble_intro_ componentClasses={this.props.data.classes} content={this.props.data.content.html} />
        <ArticleIntroBorder {...this.props} />
        {this.props.children}
      </div>
    )
  }
})

module.exports = ArticleIntro
