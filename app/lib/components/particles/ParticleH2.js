import React from 'react'

class ParticleH2 extends React.Component {
  render() {
    this.tagName = 'h2'

    let value = this.props.value
    if (this.props.url) {
        return (
            <this.tagName className={this.props.classes}>
                <a href={this.props.url} dangerouslySetInnerHTML={{
                    __html: value
                }} />
            </this.tagName>
        )
    }

    return <this.tagName className={this.props.classes} dangerouslySetInnerHTML={{
        __html: value
    }} />
  }


}

export default ParticleH2
