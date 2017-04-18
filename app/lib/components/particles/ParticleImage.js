import React from 'react'

// import {Image} from 'react-bootstrap'
import {Image} from 'cloudinary-react';

import PhotoCredits from '../../containers/PhotoCredits'

class ParticleImage extends React.Component {
    /**
    * set Cloudinary transformation options
     */
    getTransformation(props) {
        const getImageAspect = function(props) {
            // console.log('getImageAspect',props)

            // choose image style based on aspect ratio
            if ( props.width && props.height ) {
                if (props.width == props.height) {
                    return 'square'
                } else if (props.width / props.height > 1.4) {
                    return 'wide'
                } else {
                    return 'tall'
                }
            }

            return undefined
        }

        let options = { cloudName: 'enliven' }
        // console.log('getTransformation',props)

        if (props.field_imageset && props.field_imageset.length > 0) {

            // @HACK - determine Cloudinary publicId from the URL
            // it should come from the GraphQL endpoint
            options.publicId = props.field_imageset[0].file.url.replace(/^https?.+\/v\d+\/(.+)\.\w+$/, '$1')

            // console.log('options.publicId', options.publicId)

            // return null

            switch (getImageAspect(props.field_imageset[0])) {
                case 'tall':
                    options.width = 578
                    options.height = 770
                    options.crop = 'fill'
                    options.gravity = 'faces'
                    break

                case 'wide':
                    options.width = 1440
                    options.height = 810
                    options.crop = 'fill'
                    options.gravity = 'faces'
                    break

                case 'square':
                    options.width = 690
                    options.height = 690
                    options.crop = 'fill'
                    options.gravity = 'faces'
                    break
            }

        } else if (props.field_assets && props.field_assets.length > 0) {
            options.publicId = props.field_assets[0].file.name
            return null

        } else {
            // options.publicId = props.url
            // console.log('getTransformation', props.url)
            return null
        }

        // console.log('getTransformation', options)
        // return null
        return (
            <Image {...options} className="img-responsive" />
        )
    }

    render() {
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
                <this.getTransformation {...this.props} />
                <PhotoCredits {...this.props} classes={classes_credits}/>
            </div>
                    )
    }

}

export default ParticleImage
