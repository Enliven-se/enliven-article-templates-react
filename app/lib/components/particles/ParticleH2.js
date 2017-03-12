import React from 'react'

class ParticleH2 extends React.Component {
  render() {
    this.tagName = 'h2'
    return <this.tagName className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.value
      }} />
  }


}

export default ParticleH2
