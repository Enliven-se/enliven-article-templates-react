import React from 'react'

class ParticlePullquote extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'particle-pullquote'

    const value = this.props.value ? this.props.value : this.props.field_pull_quote_text ? this.props.field_pull_quote_text.value : null

    return (
      <div className={classes}>
          <blockquote className={classes} dangerouslySetInnerHTML={{
              __html: value
      }}></blockquote>
      </div>
    )
  }


}

export default ParticlePullquote
