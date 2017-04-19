import React from 'react'

class ParticleText extends React.Component {
    // transform optional CSS classes into a CSS string
    transformClasses(props) {
        const fields = ['field_corner_option', 'field_dropcap', 'field_image_caption', 'field_text_align', 'field_text_color', 'field_text_transform']
        const classNames = fields.map(key => props[key] ? props[key] : null)
        return classNames.join(' ')
    }

    render() {
        let classes = this.props.classes
            ? this.props.classes + ' '
            : ''
        classes += 'particle-text'
        const extraClasses = this.transformClasses(this.props)
        if (extraClasses) classes += ' ' + extraClasses

        const value = this.props.value ? this.props.value : this.props.field_longtext ? this.props.field_longtext.value : null

        return (
            <div className={classes} dangerouslySetInnerHTML={{
                __html: value
            }}></div>

        )
    }

}

export default ParticleText
