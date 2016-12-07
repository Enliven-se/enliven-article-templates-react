import React from 'react'

class ParticleH1 extends React.Component {
  render() {
    return <h1 className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.content.html
      }} />
  }


}

export default ParticleH1
