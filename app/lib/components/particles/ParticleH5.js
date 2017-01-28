import React from 'react'

class ParticleH5 extends React.Component {
  render() {
    return <h5 className={this.props.classes} dangerouslySetInnerHTML={{
        html: this.props.value
      }}></h5>
  }


}

export default ParticleH5
