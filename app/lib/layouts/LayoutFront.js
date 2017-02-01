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
                      <ParticleImage  {...this.props.data.field_particles[0]}/>
                      <Col sm={10} className="article-meta-small">
                          <ArticleTeaser classes="wrapper " ArticleCategory={this.props.data.field_particles[1].field_main_topics} ParticleH2={this.props.data.field_particles[1].ParticleH2} ContributorList={this.props.data.field_particles[1].field_contributors}/>
                      </Col>
                  </Col>
                  <Col sm={6}>
                      <div classes="wrapper lg-img first-center-img" >
                          <ParticleImage {...this.props.data.field_particles[2]}/>
                          <Col sm={8} smOffset={2} className="article-meta-large">
                              <ArticleTeaser classes="wrapper " ArticleCategory={this.props.data.field_particles[3].field_main_topics} ParticleH2={this.props.data.field_particles[3].ParticleH2} ContributorList={this.props.data.field_particles[3].field_contributors}/>
                          </Col>
                      </div>
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
                          <ParticleImage {...this.props.data.field_particles[4]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleTeaser classes="wrapper " ArticleCategory={this.props.data.field_particles[5].field_main_topics} ParticleH2={this.props.data.field_particles[5].ParticleH2} ParticleText={this.props.data.field_particles[5].ParticleText} ContributorList={this.props.data.field_particles[5].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.field_particles[6]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleTeaser classes="wrapper " ArticleCategory={this.props.data.field_particles[27].field_main_topics} ParticleH2={this.props.data.field_particles[27].ParticleH2} ParticleText={this.props.data.field_particles[27].ParticleText} ContributorList={this.props.data.field_particles[27].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row className='articles-grid row-flex'>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[15]}/>
                          <HR/>
                          <ParticleImage {...this.props.data.field_particles[7]}/>
                          <ArticleTeaser classes="wrapper " ParticleH2={this.props.data.field_particles[27].ParticleH2} ContributorList={this.props.data.field_particles[27].field_contributors}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[18]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.field_particles[8]}/>
                              <ParticleText {...this.props.data.field_particles[23]}/>
                              <ParticleText {...this.props.data.field_particles[24]}/>
                              <ParticleText {...this.props.data.field_particles[25]}/>
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
                          <ParticleImage {...this.props.data.field_particles[7]}/>
                          <ArticleTeaser classes="wrapper " ParticleH2={this.props.data.field_particles[29].ParticleH2} ContributorList={this.props.data.field_particles[29].field_contributors}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[15]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.field_particles[8]}/>
                              <ParticleText {...this.props.data.field_particles[23]}/>
                              <ParticleText {...this.props.data.field_particles[24]}/>
                              <ParticleText {...this.props.data.field_particles[25]}/>
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
                          <ParticleImage {...this.props.data.field_particles[7]}/>
                          <ArticleTeaser classes="wrapper " ParticleH2={this.props.data.field_particles[31].ParticleH2} ContributorList={this.props.data.field_particles[31].field_contributors}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.field_particles[19]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.field_particles[8]}/>
                              <ParticleText {...this.props.data.field_particles[23]}/>
                              <ParticleText {...this.props.data.field_particles[24]}/>
                              <ParticleText {...this.props.data.field_particles[25]}/>
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
                      <AboutContributorContainer ParticleImage={this.props.data.field_particles[10].ParticleImage} ParticleH2={this.props.data.field_particles[10].ParticleH2} ParticleH3={this.props.data.field_particles[10].ParticleH3} ParticleText={this.props.data.field_particles[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.field_particles[10].ParticleImage} ParticleH2={this.props.data.field_particles[10].ParticleH2} ParticleH3={this.props.data.field_particles[10].ParticleH3} ParticleText={this.props.data.field_particles[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.field_particles[10].ParticleImage} ParticleH2={this.props.data.field_particles[10].ParticleH2} ParticleH3={this.props.data.field_particles[10].ParticleH3} ParticleText={this.props.data.field_particles[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.field_particles[10].ParticleImage} ParticleH2={this.props.data.field_particles[10].ParticleH2} ParticleH3={this.props.data.field_particles[10].ParticleH3} ParticleText={this.props.data.field_particles[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.field_particles[10].ParticleImage} ParticleH2={this.props.data.field_particles[10].ParticleH2} ParticleH3={this.props.data.field_particles[10].ParticleH3} ParticleText={this.props.data.field_particles[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.field_particles[10].ParticleImage} ParticleH2={this.props.data.field_particles[10].ParticleH2} ParticleH3={this.props.data.field_particles[10].ParticleH3} ParticleText={this.props.data.field_particles[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.field_particles[10].ParticleImage} ParticleH2={this.props.data.field_particles[10].ParticleH2} ParticleH3={this.props.data.field_particles[10].ParticleH3} ParticleText={this.props.data.field_particles[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.field_particles[10].ParticleImage} ParticleH2={this.props.data.field_particles[10].ParticleH2} ParticleH3={this.props.data.field_particles[10].ParticleH3} ParticleText={this.props.data.field_particles[10].ParticleText}/>
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
                          <ParticleImage {...this.props.data.field_particles[32]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleTeaser classes="wrapper " ArticleCategory={this.props.data.field_particles[33].field_main_topics} ParticleH2={this.props.data.field_particles[33].ParticleH2} ParticleText={this.props.data.field_particles[33].ParticleText} ContributorList={this.props.data.field_particles[33].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.field_particles[34]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleTeaser classes="wrapper " ArticleCategory={this.props.data.field_particles[35].field_main_topics} ParticleH2={this.props.data.field_particles[35].ParticleH2} ParticleText={this.props.data.field_particles[35].ParticleText} ContributorList={this.props.data.field_particles[35].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={9}>
                      <WideImgContainer>
                          <div classes="wrapper lg-img">
                              <ParticleImage {...this.props.data.field_particles[36]}/>
                              <Col sm={5} smOffset={1} className="article-meta-large">
                                  <MetaLinksContainer>
                                      <ArticleTeaser classes="wrapper " ArticleCategory={this.props.data.field_particles[37].field_main_topics} ParticleH2={this.props.data.field_particles[37].ParticleH2} ContributorList={this.props.data.field_particles[37].field_contributors}/>
                                  </MetaLinksContainer>
                              </Col>
                          </div>
                      </WideImgContainer>
                  </Col>
                  <Col sm={3}>
                      <ArticleTeaser classes="wrapper xtr-sm-img lg-img">
                          <ParticleImage {...this.props.data.field_particles[38]}/>
                          <Col sm={11} smOffset={1} className="article-meta-xtr-sm">
                              <MetaLinksContainer>
                                    <ArticleTeaser classes="wrapper " ArticleCategory={this.props.data.field_particles[39].field_main_topics} ParticleH2={this.props.data.field_particles[39].ParticleH2} ContributorList={this.props.data.field_particles[39].field_contributors}/>
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
