import React from 'react'

class ParticleH6 extends React.Component {
  render() {
    return <h6 className={this.props.classes} dangerouslySetInnerHTML={{
        __html: this.props.content.html
      }}></h6>
  }


}

export default ParticleH6
