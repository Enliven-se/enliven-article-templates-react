import React from 'react'

import MetaLinksContainer from './MetaLinksContainer'

import ArticleCategory from '../components/base/ArticleCategory'
import Link from '../components/base/Link'

import ParticleImage from '../components/particles/ParticleImage'
import ParticleSubheader from '../components/particles/ParticleSubheader'
import ParticleText from '../components/particles/ParticleText'

import ContributorList from '../containers/ContributorList'

class ArticleTeaser extends React.Component {
    render() {
        let classes = this.props.classes
            ? this.props.classes + ' '
            : ''

        let metaLinksClasses = this.props.metaLinksClasses
            ? this.props.metaLinksClasses + ' '
            : ''

        let url = this.props.url
            ? this.props.url
            : null

        return (
            <div className={classes}>
                <Link url={url}>
                    {this.props.ParticleImage
                        ? <ParticleImage {...this.props.ParticleImage} imageStyle={this.props.teaserFormat}/>
                    : ''}
                </Link>
                <MetaLinksContainer classes={metaLinksClasses} {...this.props.MetaLinksContainer}>
                    {this.props.ArticleCategory
                        ? <ArticleCategory name={this.props.ArticleCategory.name} classes={this.props.ArticleCategory.classes} url={this.props.ArticleCategory.url}/>
                    : ''}
                    {this.props.ParticleSubheader
                        ? <ParticleSubheader value={this.props.ParticleSubheader.value} url={url}/>
                    : ''}
                    {this.props.ParticleText
                        ? <ParticleText value={this.props.ParticleText.value}/>
                    : ''}
                    {this.props.ContributorList
                        ? <ContributorList data={this.props.ContributorList}/>
                    : ''}
                    {this.props.Link
                        ? <Link {...this.props.Link}/>
                    : ''}
                    {this.props.edit_url
                        ? <Link url={this.props.edit_url} text='edit'/>
                    : ''}
                </MetaLinksContainer>
                {this.props.children}
            </div>
        )
    }
}

export default ArticleTeaser
