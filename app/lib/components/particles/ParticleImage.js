import React from 'react'
import {Image} from 'react-bootstrap'

import PhotoCredits from '../../containers/PhotoCredits'

class ParticleImage extends React.Component {
    chooseAspect(width, height) {
        // choose image style based on aspect ratio
        let aspect = width / height
        if (aspect > 1.4) {
            style = 'wide'
        } else {
            style = 'tall'
        }

        return style
    }

    formatURLImageStyle(url, style) {
        // hack - simulate image style
        url = url.replace(/\/files\/(?:styles\/\w+\/)?/, '/files/styles/' + style + '/public/')
        return url
    }

    setURL() {
        let url = ''
        let style = this.props.imageStyle
            ? this.props.imageStyle
            : 'wide'

        if (this.props.field_imageset && this.props.field_imageset.length > 0) {
            if (!style) {
                style = this.chooseAspect(this.props.field_imageset[0].width, this.props.field_imageset[0].height)
            }
            url = this.props.field_imageset[0]['style_' + style]
        } else if (this.props.field_assets && this.props.field_assets.length > 0) {
            url = this.props.field_assets[0].file.url
            // url = this.formatURLImageStyle(url, style)
        } else {
            url = this.props.url
            // url = this.formatURLImageStyle(url, style)
        }

        return url
    }

    render() {
        let url = this.setURL()

        let classes = this.props.classes
            ? this.props.classes + ' '
            : ''
        let classes_credits = this.props.credits && this.props.credits.classes
            ? this.props.credits.classes + ' '
            : ''
        classes += 'particle-image'

        if (this.props.field_corner_option) {
            classes_credits += ' ' + this.props.field_corner_option
        }

        return (
            <div className={classes}>
                <Image src={url} responsive/>
                <PhotoCredits {...this.props} classes={classes_credits}/>
            </div>
        )
    }

}

export default ParticleImage
