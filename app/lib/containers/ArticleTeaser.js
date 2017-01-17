import React from 'react'

import MetaLinksContainer from './MetaLinksContainer'

import ArticleCategory from '../components/base/ArticleCategory'
import Link from '../components/base/Link'

import ParticleImage from '../components/particles/ParticleImage'
import ParticleH2 from '../components/particles/ParticleH2'
import ParticleText from '../components/particles/ParticleText'

class ArticleTeaser extends React.Component {
    render() {
        let classes = this.props.classes
            ? this.props.classes + ' '
            : ''

        let metaLinksClasses = ''
        // metaLinksClasses += 'article-meta-small'
        // metaLinksClasses += 'has-intro-text'
        // metaLinksClasses += 'padding-left:3col;padding-right:1col'

        return (
            <div className={classes}>
                {this.props.ParticleImage ? <ParticleImage {...this.props.ParticleImage} /> : ''}
                <MetaLinksContainer className={ metaLinksClasses } {...this.props.MetaLinksContainer}>
                    {this.props.ArticleCategory ? <ArticleCategory {...this.props.ArticleCategory} /> : ''}
                    {this.props.ParticleH2 ? <ParticleH2 {...this.props.ParticleH2} /> : ''}
                    {this.props.ParticleText ? <ParticleText {...this.props.ParticleText} /> : ''}
                    {this.props.Link ? <Link {...this.props.Link} /> : ''}
                </MetaLinksContainer>
                {this.props.children}
            </div>
        )
    }
}

export default ArticleTeaser
