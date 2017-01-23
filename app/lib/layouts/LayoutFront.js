import React from 'react'
import { Row, Col } from 'react-bootstrap'

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
import DatePublished from '../components/base/DatePublished'
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
                      <ParticleH2 className='text-color-gold header-top' {...this.props.data.fields[17]}/>
                      <HR/>
                  </Col>
                  <Col sm={3}>
                      <ArticleTeaser classes="wrapper sm-img">
                          <ParticleImage {...this.props.data.fields[0]}/>
                          <div className="article-meta-small">
                              <MetaLinksContainer>
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[2]}/>
                              </MetaLinksContainer>
                          </div>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img first-center-img">
                          <ParticleImage {...this.props.data.fields[3]}/>
                          <Col sm={8} smOffset={2} className="article-meta-large">
                              <MetaLinksContainer>
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[4]}/>
                              </MetaLinksContainer>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={3}>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[16]}/>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[5]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleCategory {...this.props.data.fields[1]}/>
                              <ParticleH2 {...this.props.data.fields[4]}/>
                              <ParticleText {...this.props.data.fields[26]}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[6]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleCategory {...this.props.data.fields[1]}/>
                              <ParticleH2 {...this.props.data.fields[4]}/>
                              <ParticleText {...this.props.data.fields[26]}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row className='articles-grid row-flex'>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.fields[17]}/>
                          <HR/>
                          <ParticleImage {...this.props.data.fields[7]}/>
                          <ParticleH2 {...this.props.data.fields[4]}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.fields[18]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.fields[8]}/>
                              <ParticleText {...this.props.data.fields[23]}/>
                              <ParticleText {...this.props.data.fields[24]}/>
                              <ParticleText {...this.props.data.fields[25]}/>
                              <div className="more-button">
                                  <Link text={this.props.data.fields[9].content.html} url={this.props.data.fields[9].url}/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.fields[19]}/>
                          <HR/>
                          <ParticleImage {...this.props.data.fields[7]}/>
                          <ParticleH2 {...this.props.data.fields[4]}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.fields[17]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.fields[8]}/>
                              <ParticleText {...this.props.data.fields[23]}/>
                              <ParticleText {...this.props.data.fields[24]}/>
                              <ParticleText {...this.props.data.fields[25]}/>
                              <div className="more-button">
                                  <Link text={this.props.data.fields[9].content.html} url={this.props.data.fields[9].url}/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.fields[18]}/>
                          <HR/>
                          <ParticleImage {...this.props.data.fields[7]}/>
                          <ParticleH2 {...this.props.data.fields[4]}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.fields[19]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.fields[8]}/>
                              <ParticleText {...this.props.data.fields[23]}/>
                              <ParticleText {...this.props.data.fields[24]}/>
                              <ParticleText {...this.props.data.fields[25]}/>
                              <div className="more-button">
                                  <Link text={this.props.data.fields[9].content.html} url={this.props.data.fields[9].url}/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
              </Row>
              <Row className='row-flex'>
                  <Col sm={12} className='contributors-headline'>
                      <SectionHeader {...this.props.data.fields[21]}/>
                  </Col>
              </Row>
              <Row className='contributors-grid'>
                  <Col sm={3}>
                      <AboutContributorContainer
                          ParticleImage={this.props.data.fields[10]}
                          ParticleH2={this.props.data.fields[20]}
                          ParticleH3={this.props.data.fields[11]}
                          ParticleText={this.props.data.fields[12]}
                      />
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer
                          ParticleImage={this.props.data.fields[10]}
                          ParticleH2={this.props.data.fields[20]}
                          ParticleH3={this.props.data.fields[11]}
                          ParticleText={this.props.data.fields[12]}
                      />
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer
                          ParticleImage={this.props.data.fields[10]}
                          ParticleH2={this.props.data.fields[20]}
                          ParticleH3={this.props.data.fields[11]}
                          ParticleText={this.props.data.fields[12]}
                      />
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer
                          ParticleImage={this.props.data.fields[10]}
                          ParticleH2={this.props.data.fields[20]}
                          ParticleH3={this.props.data.fields[11]}
                          ParticleText={this.props.data.fields[12]}
                      />
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer
                          ParticleImage={this.props.data.fields[10]}
                          ParticleH2={this.props.data.fields[20]}
                          ParticleH3={this.props.data.fields[11]}
                          ParticleText={this.props.data.fields[12]}
                      />
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer
                          ParticleImage={this.props.data.fields[10]}
                          ParticleH2={this.props.data.fields[20]}
                          ParticleH3={this.props.data.fields[11]}
                          ParticleText={this.props.data.fields[12]}
                      />
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer
                          ParticleImage={this.props.data.fields[10]}
                          ParticleH2={this.props.data.fields[20]}
                          ParticleH3={this.props.data.fields[11]}
                          ParticleText={this.props.data.fields[12]}
                      />
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer
                          ParticleImage={this.props.data.fields[10]}
                          ParticleH2={this.props.data.fields[20]}
                          ParticleH3={this.props.data.fields[11]}
                          ParticleText={this.props.data.fields[12]}
                      />
                  </Col>
              </Row>
              <Row className='row-flex'>
                  <Col sm={12} className='recommend-headline'>
                      <SectionHeader {...this.props.data.fields[22]}/>
                  </Col>
              </Row>
              <Row className='articles row-flex'>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[5]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleCategory {...this.props.data.fields[1]}/>
                              <ParticleH2 {...this.props.data.fields[4]}/>
                              <ParticleText {...this.props.data.fields[26]}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[6]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleCategory {...this.props.data.fields[1]}/>
                              <ParticleH2 {...this.props.data.fields[4]}/>
                              <ParticleText {...this.props.data.fields[26]}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={9}>
                      <WideImgContainer>
                          <ArticleTeaser classes="wrapper lg-img">
                              <ParticleImage {...this.props.data.fields[13]}/>
                              <Col sm={5} smOffset={1} className="article-meta-large">
                                  <MetaLinksContainer>
                                      <ArticleCategory {...this.props.data.fields[1]}/>
                                      <ParticleH2 {...this.props.data.fields[4]}/>
                                  </MetaLinksContainer>
                              </Col>
                          </ArticleTeaser>
                      </WideImgContainer>
                  </Col>
                  <Col sm={3}>
                      <ArticleTeaser classes="wrapper xtr-sm-img lg-img">
                          <ParticleImage {...this.props.data.fields[14]}/>
                          <Col sm={11} smOffset={1} className="article-meta-xtr-sm">
                              <MetaLinksContainer>
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[2]}/>
                                  <Link {...this.props.data.fields[3]}/>
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
