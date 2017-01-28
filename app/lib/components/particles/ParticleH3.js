import React from 'react'

class ParticleH3 extends React.Component {
  render() {
    return <h3 className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.value
      }}></h3>
  }


}

export default ParticleH3
