import React from 'react'

import { Grid } from 'react-bootstrap'

class Container extends React.Component {
  render() {
    let elStyle = {
    }

    let classes = this.props.classes ? this.props.classes + ' ' : ''

    if (this.props.backgroundImage && this.props.backgroundImage.url) {
      classes += 'has-hero'

      elStyle.backgroundImage = 'url(' + this.props.backgroundImage.url + ')'
    }

    return <Grid fluid={this.props.fluid} style={elStyle} className={classes}>{this.props.children}</Grid>
  }


}

export default Container
