import React from 'react'

class ParticleH4 extends React.Component {
  render() {
    return <h4 className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.value
      }}></h4>
  }


}

export default ParticleH4
