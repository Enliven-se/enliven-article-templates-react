import React from 'react'
import MediaElement from "./components/base/MediaElement.js"

class ParticleVideo extends React.Component {
    render() {
        return <MediaElement {...this.props} />
    }
}

export default ParticleVideo
