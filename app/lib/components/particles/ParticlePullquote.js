import React from 'react'

class ParticlePullquote extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'particle-pullquote'

    return (
      <div className={classes}>
          <blockquote className={classes} dangerouslySetInnerHTML={{
              __html: this.props.value
      }}></blockquote>
      </div>
    )
  }


}

export default ParticlePullquote
