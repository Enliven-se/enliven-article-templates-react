import React from 'react'

const ParticlePreamble_intro_ = require('../components/particles/ParticlePreamble_intro_'),
  HR = require('../components/base/HR')

const ArticleIntro = React.createClass({
  render: function() {
    if (this.props.bordered) {
      return (
        <div className={this.props.componentClasses}>
          <HR componentClasses='hr' />
          <ParticlePreamble_intro_ componentClasses={this.props.data.classes} content={this.props.data.content.html} />
          <HR componentClasses='hr' />
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div className={this.props.componentClasses}>
          <ParticlePreamble_intro_ componentClasses={this.props.data.classes} content={this.props.data.content.html} />
          {this.props.children}
        </div>
      )
    }
  }
})

module.exports = ArticleIntro
