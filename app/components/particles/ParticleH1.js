import React from 'react'
import { PageHeader } from 'react-bootstrap'

const ParticleH1 = React.createClass({
  render: function() {
    return <PageHeader className={this.props.componentClasses}>{this.props.content}</PageHeader>
  }
})

module.exports = ParticleH1
