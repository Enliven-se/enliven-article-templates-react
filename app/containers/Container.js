import React from 'react'

import { Grid } from 'react-bootstrap'

const Container = React.createClass({
  render: function() {
    var elStyle = {
    }

    if (this.props.backgroundImage) {
      elStyle.backgroundImage = 'url(' + this.props.backgroundImage + ')'
      elStyle.height = '100vmax'
      elStyle.backgroundSize = 'cover'
      elStyle.backgroundPosition = '100% 0'
    }

    return <Grid fluid={this.props.fluid} style={elStyle} className={this.props.componentClasses}>{this.props.children}</Grid>
  }
})

module.exports = Container
