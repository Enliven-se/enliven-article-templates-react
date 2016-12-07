import React from 'react'

class ParticleH2 extends React.Component {
  render() {
    return <h2 className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.content.html
      }} />
  }


}

export default ParticleH2
