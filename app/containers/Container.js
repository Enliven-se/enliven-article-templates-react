import React from 'react'

import { Grid } from 'react-bootstrap'

const Container = React.createClass({
  render: function() {
    var elStyle = {
    }

    var classes = this.props.classes ? this.props.classes : ''

    if (this.props.backgroundImage) {
      classes += ' has-hero'

      elStyle.backgroundImage = 'url(' + this.props.backgroundImage + ')'
    }

    return <Grid fluid={this.props.fluid} style={elStyle} className={classes}>{this.props.children}</Grid>
  }
})

module.exports = Container
