import React from 'react'
import { Image } from 'react-bootstrap'

class ParticleImag extends React.Component {
  render() {
    return <div className='particle-imag'>
      <Image src={this.props.url} responsive />
    </div>
  }


}

export default ParticleImag
