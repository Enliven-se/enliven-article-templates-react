import React from 'react'

class ParticleText extends React.Component {
  render() {
    const value = this.props.field_longtext ? this.props.field_longtext.value : this.props.value
    let classes = this.props.classes ? this.props.classes : ''
    classes += ' particle-text'

    return (
      <div className={classes} dangerouslySetInnerHTML={{
          __html: value
      }}></div>

    )
  }


}

export default ParticleText
