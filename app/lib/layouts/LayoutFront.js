import React from 'react'
import {Row, Col} from 'react-bootstrap'

import Container from '../containers/Container'
import SectionHeader from '../containers/SectionHeader'
import ContributorList from '../containers/ContributorList'

/*
articles-list-text => ArticlesListContainer
ArticleTeaser
meta-links => MetaLinksContainer
square-article => SquareArticleContainer
wide-img => WideImgContainer
 */

import AboutContributorContainer from '../containers/AboutContributorContainer'
import ArticlesListContainer from '../containers/ArticlesListContainer'
import ArticleTeaser from '../containers/ArticleTeaser'
import MetaLinksContainer from '../containers/MetaLinksContainer'
import SquareArticleContainer from '../containers/SquareArticleContainer'
import WideImgContainer from '../containers/WideImgContainer'

import HR from '../components/base/HR'
import ArticleCategory from '../components/base/ArticleCategory'
import Link from '../components/base/Link'

import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'
import ParticleH2 from '../components/particles/ParticleH2'
import ParticleH3 from '../components/particles/ParticleH3'

class LayoutFront extends React.Component {
    render() {
        return (
            <div className='layout layout-front'>
                <Container fluid classes='panel-1'>
                    <Row className='articles row-flex'>
                        <Col sm={12}>
                            <ParticleH2 className='text-color-gold header-top' {...this.props.data.field_particles[17]}/>
                            <HR/>
                        </Col>
                        <Col sm={3}>
                            <ArticleTeaser classes="wrapper sm-img">
                                <ParticleImage url={this.props.data.field_particles[0].url} classes={this.props.data.field_particles[0].classes} credits={this.props.data.field_particles[0].credits}/>
                                <div className="article-meta-small">
                                    <MetaLinksContainer>
                                        <ArticleCategory name={this.props.data.field_particles[1].name} url={this.props.data.field_particles[1].url}/>
                                        <ParticleH2 {...this.props.data.field_particles[2]}/>
                                    </MetaLinksContainer>
                                </div>
                            </ArticleTeaser>
                        </Col>
                        <Col sm={6}>
                            <ArticleTeaser classes="wrapper lg-img first-center-img">
                                <ParticleImage url={this.props.data.field_particles[3].url} classes={this.props.data.field_particles[3].classes} credits={this.props.data.field_particles[3].credits}/>
                                <Col sm={8} smOffset={2} className="article-meta-large">
                                    <MetaLinksContainer>
                                        <ArticleCategory name={this.props.data.field_particles[1].name} url={this.props.data.field_particles[1].url}/>
                                        <ParticleH2 {...this.props.data.field_particles[4]}/>
                                    </MetaLinksContainer>
                                </Col>
                            </ArticleTeaser>
                        </Col>
                        <Col sm={3}>
                            <ParticleH2 className='heading-text' {...this.props.data.field_particles[16]}/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <ArticleTeaser classes="wrapper lg-img">
                                <ParticleImage url={this.props.data.field_particles[5].url} classes={this.props.data.field_particles[5].classes} credits={this.props.data.field_particles[5].credits}/>
                                <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                                    <ArticleCategory name={this.props.data.field_particles[1].name} url={this.props.data.field_particles[1].url}/>
                                    <ParticleH2 {...this.props.data.field_particles[4]}/>
                                    <ParticleText value={this.props.data.field_particles[26].value} classes={this.props.data.field_particles[26].classes}/>
                                </Col>
                            </ArticleTeaser>
                        </Col>
                        <Col sm={6}>
                            <ArticleTeaser classes="wrapper lg-img">
                                <ParticleImage url={this.props.data.field_particles[6].url} classes={this.props.data.field_particles[6].classes} credits={this.props.data.field_particles[6].credits}/>
                                <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                                    <ArticleCategory name={this.props.data.field_particles[1].name} url={this.props.data.field_particles[1].url}/>
                                    <ParticleH2 {...this.props.data.field_particles[4]}/>
                                    <ParticleText value={this.props.data.field_particles[26].value} classes={this.props.data.field_particles[26].classes}/>
                                </Col>
                            </ArticleTeaser>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className='articles-grid row-flex'>
                        <Col xs={12} sm={6} md={4}>
                            <SquareArticleContainer>
                                <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[17]}/>
                                <HR/>
                                <ParticleImage url={this.props.data.field_particles[7].url} classes={this.props.data.field_particles[7].classes} credits={this.props.data.field_particles[7].credits}/>
                                <ParticleH2 {...this.props.data.field_particles[4]}/>
                            </SquareArticleContainer>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <ArticlesListContainer>
                                <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[18]}/>
                                <HR/>
                                <div className='articles-list-text'>
                                    <ParticleText value={this.props.data.field_particles[8].value} classes={this.props.data.field_particles[8].classes}/>
                                    <ParticleText value={this.props.data.field_particles[23].value} classes={this.props.data.field_particles[23].classes}/>
                                    <ParticleText value={this.props.data.field_particles[24].value} classes={this.props.data.field_particles[24].classes}/>
                                    <ParticleText value={this.props.data.field_particles[25].value} classes={this.props.data.field_particles[25].classes}/>
                                    <div className="more-button">
                                        <Link text={this.props.data.field_particles[9].value} url={this.props.data.field_particles[9].url}/>
                                    </div>
                                </div>
                            </ArticlesListContainer>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <SquareArticleContainer>
                                <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[19]}/>
                                <HR/>
                                <ParticleImage url={this.props.data.field_particles[7].url} classes={this.props.data.field_particles[7].classes} credits={this.props.data.field_particles[7].credits}/>
                                <ParticleH2 {...this.props.data.field_particles[4]}/>
                            </SquareArticleContainer>
                        </Col>
                        <Col sm={6} md={4}>
                            <ArticlesListContainer>
                                <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[17]}/>
                                <HR/>
                                <div className='articles-list-text'>
                                    <ParticleText value={this.props.data.field_particles[8].value} classes={this.props.data.field_particles[8].classes}/>
                                    <ParticleText value={this.props.data.field_particles[23].value} classes={this.props.data.field_particles[23].classes}/>
                                    <ParticleText value={this.props.data.field_particles[24].value} classes={this.props.data.field_particles[24].classes}/>
                                    <ParticleText value={this.props.data.field_particles[25].value} classes={this.props.data.field_particles[25].classes}/>
                                    <div className="more-button">
                                        <Link text={this.props.data.field_particles[9].value} url={this.props.data.field_particles[9].url}/>
                                    </div>
                                </div>
                            </ArticlesListContainer>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <SquareArticleContainer>
                                <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[18]}/>
                                <HR/>
                                <ParticleImage url={this.props.data.field_particles[7].url} classes={this.props.data.field_particles[7].classes} credits={this.props.data.field_particles[7].credits}/>
                                <ParticleH2 {...this.props.data.field_particles[4]}/>
                            </SquareArticleContainer>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <ArticlesListContainer>
                                <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[19]}/>
                                <HR/>
                                <div className='articles-list-text'>
                                    <ParticleText value={this.props.data.field_particles[8].value} classes={this.props.data.field_particles[8].classes}/>
                                    <ParticleText value={this.props.data.field_particles[23].value} classes={this.props.data.field_particles[23].classes}/>
                                    <ParticleText value={this.props.data.field_particles[24].value} classes={this.props.data.field_particles[24].classes}/>
                                    <ParticleText value={this.props.data.field_particles[25].value} classes={this.props.data.field_particles[25].classes}/>
                                    <div className="more-button">
                                        <Link text={this.props.data.field_particles[9].value} url={this.props.data.field_particles[9].url}/>
                                    </div>
                                </div>
                            </ArticlesListContainer>
                        </Col>
                    </Row>
                    <Row className='row-flex'>
                        <Col sm={12} className='contributors-headline'>
                            <SectionHeader {...this.props.data.field_particles[21]}/>
                        </Col>
                    </Row>
                    <Row className='contributors-grid'>
                        <Col sm={3}>
                            <AboutContributorContainer ParticleImage={this.props.data.field_particles[10]} ParticleH2={this.props.data.field_particles[20]} ParticleH3={this.props.data.field_particles[11]} ParticleText={this.props.data.field_particles[12]}/>
                        </Col>
                        <Col sm={3}>
                            <AboutContributorContainer ParticleImage={this.props.data.field_particles[10]} ParticleH2={this.props.data.field_particles[20]} ParticleH3={this.props.data.field_particles[11]} ParticleText={this.props.data.field_particles[12]}/>
                        </Col>
                        <Col sm={3}>
                            <AboutContributorContainer ParticleImage={this.props.data.field_particles[10]} ParticleH2={this.props.data.field_particles[20]} ParticleH3={this.props.data.field_particles[11]} ParticleText={this.props.data.field_particles[12]}/>
                        </Col>
                        <Col sm={3}>
                            <AboutContributorContainer ParticleImage={this.props.data.field_particles[10]} ParticleH2={this.props.data.field_particles[20]} ParticleH3={this.props.data.field_particles[11]} ParticleText={this.props.data.field_particles[12]}/>
                        </Col>
                        <Col sm={3}>
                            <AboutContributorContainer ParticleImage={this.props.data.field_particles[10]} ParticleH2={this.props.data.field_particles[20]} ParticleH3={this.props.data.field_particles[11]} ParticleText={this.props.data.field_particles[12]}/>
                        </Col>
                        <Col sm={3}>
                            <AboutContributorContainer ParticleImage={this.props.data.field_particles[10]} ParticleH2={this.props.data.field_particles[20]} ParticleH3={this.props.data.field_particles[11]} ParticleText={this.props.data.field_particles[12]}/>
                        </Col>
                        <Col sm={3}>
                            <AboutContributorContainer ParticleImage={this.props.data.field_particles[10]} ParticleH2={this.props.data.field_particles[20]} ParticleH3={this.props.data.field_particles[11]} ParticleText={this.props.data.field_particles[12]}/>
                        </Col>
                        <Col sm={3}>
                            <AboutContributorContainer ParticleImage={this.props.data.field_particles[10]} ParticleH2={this.props.data.field_particles[20]} ParticleH3={this.props.data.field_particles[11]} ParticleText={this.props.data.field_particles[12]}/>
                        </Col>
                    </Row>
                    <Row className='row-flex'>
                        <Col sm={12} className='recommend-headline'>
                            <SectionHeader {...this.props.data.field_particles[22]}/>
                        </Col>
                    </Row>
                    <Row className='articles row-flex'>
                        <Col sm={6}>
                            <ArticleTeaser classes="wrapper lg-img">
                                <ParticleImage url={this.props.data.field_particles[5].url} classes={this.props.data.field_particles[5].classes} credits={this.props.data.field_particles[5].credits}/>
                                <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                                    <ArticleCategory name={this.props.data.field_particles[1].name} url={this.props.data.field_particles[1].url}/>
                                    <ParticleH2 {...this.props.data.field_particles[4]}/>
                                    <ParticleText value={this.props.data.field_particles[26].value} classes={this.props.data.field_particles[26].classes}/>
                                </Col>
                            </ArticleTeaser>
                        </Col>
                        <Col sm={6}>
                            <ArticleTeaser classes="wrapper lg-img">
                                <ParticleImage url={this.props.data.field_particles[6].url} classes={this.props.data.field_particles[6].classes} credits={this.props.data.field_particles[6].credits}/>
                                <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                                    <ArticleCategory name={this.props.data.field_particles[1].name} url={this.props.data.field_particles[1].url}/>
                                    <ParticleH2 {...this.props.data.field_particles[4]}/>
                                    <ParticleText value={this.props.data.field_particles[26].value} classes={this.props.data.field_particles[26].classes}/>
                                </Col>
                            </ArticleTeaser>
                        </Col>
                        <Col sm={9}>
                            <WideImgContainer>
                                <ArticleTeaser classes="wrapper lg-img">
                                    <ParticleImage url={this.props.data.field_particles[13].url} classes={this.props.data.field_particles[13].classes} credits={this.props.data.field_particles[13].credits}/>
                                    <Col sm={5} smOffset={1} className="article-meta-large">
                                        <MetaLinksContainer>
                                            <ArticleCategory name={this.props.data.field_particles[1].name} url={this.props.data.field_particles[1].url}/>
                                            <ParticleH2 {...this.props.data.field_particles[4]}/>
                                        </MetaLinksContainer>
                                    </Col>
                                </ArticleTeaser>
                            </WideImgContainer>
                        </Col>
                        <Col sm={3}>
                            <ArticleTeaser classes="wrapper xtr-sm-img lg-img">
                                <ParticleImage url={this.props.data.field_particles[14].url} classes={this.props.data.field_particles[14].classes} credits={this.props.data.field_particles[14].credits}/>
                                <Col sm={11} smOffset={1} className="article-meta-xtr-sm">
                                    <MetaLinksContainer>
                                        <ArticleCategory name={this.props.data.field_particles[1].name} url={this.props.data.field_particles[1].url}/>
                                        <ParticleH2 {...this.props.data.field_particles[2]}/>
                                        <Link {...this.props.data.field_particles[3]}/>
                                    </MetaLinksContainer>
                                </Col>
                            </ArticleTeaser>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LayoutFront
