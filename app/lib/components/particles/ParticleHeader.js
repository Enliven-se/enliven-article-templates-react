import React from 'react'

class ParticleHeader extends React.Component {
    render() {
        this.tagName = 'h' + (this.props.headerLevel
            ? this.props.headerLevel
            : 1)

        let value = this.props.value
        if (this.props.url) {
            return (
                <this.tagName className={this.props.classes}>
                    <a href={this.props.url} dangerouslySetInnerHTML={{
                        __html: value
                    }}/>
                </this.tagName>
            )
        }

        return <this.tagName className={this.props.classes} dangerouslySetInnerHTML={{
            __html: value
        }}/>
    }
}

export default ParticleHeader
