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
                      <ParticleH2 className='text-color-gold header-top' {...this.props.data.nodes[17]}/>
                      <HR/>
                  </Col>
                  <Col sm={3}>
                      <ParticleImage  {...this.props.data.nodes[0]}/>
                      <Col sm={10} className="article-meta-small">
                          <ArticleTeaser classes="wrapper" ArticleCategory={this.props.data.nodes[1].field_main_topics[0]} ParticleH2={this.props.data.nodes[1].ParticleH2} ContributorList={this.props.data.nodes[1].field_contributors}/>
                      </Col>
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img first-center-img" >
                          <ParticleImage {...this.props.data.nodes[2]}/>
                          <Col sm={8} smOffset={2} className="article-meta-large">
                              <ArticleTeaser classes="wrapper" ArticleCategory={this.props.data.nodes[3].field_main_topics[0]} ParticleH2={this.props.data.nodes[3].ParticleH2} ContributorList={this.props.data.nodes[3].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={3}>
                      <ParticleH2 className='heading-text' {...this.props.data.nodes[16]}/>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.nodes[4]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleTeaser classes="wrapper" ArticleCategory={this.props.data.nodes[5].field_main_topics[0]} ParticleH2={this.props.data.nodes[5].ParticleH2} ParticleText={this.props.data.nodes[5].ParticleText} ContributorList={this.props.data.nodes[5].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.nodes[6]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleTeaser classes="wrapper" ArticleCategory={this.props.data.nodes[27].field_main_topics[0]} ParticleH2={this.props.data.nodes[27].ParticleH2} ParticleText={this.props.data.nodes[27].ParticleText} ContributorList={this.props.data.nodes[27].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row className='articles-grid row-flex'>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.nodes[15]}/>
                          <HR/>
                          <ParticleImage {...this.props.data.nodes[7]}/>
                          <ArticleTeaser classes="wrapper" ParticleH2={this.props.data.nodes[27].ParticleH2} ContributorList={this.props.data.nodes[27].field_contributors}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.nodes[18]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.nodes[8]}/>
                              <ParticleText {...this.props.data.nodes[23]}/>
                              <ParticleText {...this.props.data.nodes[24]}/>
                              <ParticleText {...this.props.data.nodes[25]}/>
                              <div className="more-button">
                                  <Link text={this.props.data.nodes[9].value} url={this.props.data.nodes[9].url}/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.nodes[19]}/>
                          <HR/>
                          <ParticleImage {...this.props.data.nodes[7]}/>
                          <ArticleTeaser classes="wrapper" ParticleH2={this.props.data.nodes[29].ParticleH2} ContributorList={this.props.data.nodes[29].field_contributors}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.nodes[15]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.nodes[8]}/>
                              <ParticleText {...this.props.data.nodes[23]}/>
                              <ParticleText {...this.props.data.nodes[24]}/>
                              <ParticleText {...this.props.data.nodes[25]}/>
                              <div className="more-button">
                                  <Link text={this.props.data.nodes[9].value} url={this.props.data.nodes[9].url}/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.nodes[18]}/>
                          <HR/>
                          <ParticleImage {...this.props.data.nodes[7]}/>
                          <ArticleTeaser classes="wrapper" ParticleH2={this.props.data.nodes[31].ParticleH2} ContributorList={this.props.data.nodes[31].field_contributors}/>
                      </SquareArticleContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' {...this.props.data.nodes[19]}/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText {...this.props.data.nodes[8]}/>
                              <ParticleText {...this.props.data.nodes[23]}/>
                              <ParticleText {...this.props.data.nodes[24]}/>
                              <ParticleText {...this.props.data.nodes[25]}/>
                              <div className="more-button">
                                  <Link text={this.props.data.nodes[9].value} url={this.props.data.nodes[9].url}/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
              </Row>
              <Row className='row-flex'>
                  <Col sm={12} className='contributors-headline'>
                      <SectionHeader {...this.props.data.nodes[21]}/>
                  </Col>
              </Row>
              <Row className='contributors-grid'>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.nodes[10].ParticleImage} ParticleH2={this.props.data.nodes[10].ParticleH2} ParticleH3={this.props.data.nodes[10].ParticleH3} ParticleText={this.props.data.nodes[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.nodes[10].ParticleImage} ParticleH2={this.props.data.nodes[10].ParticleH2} ParticleH3={this.props.data.nodes[10].ParticleH3} ParticleText={this.props.data.nodes[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.nodes[10].ParticleImage} ParticleH2={this.props.data.nodes[10].ParticleH2} ParticleH3={this.props.data.nodes[10].ParticleH3} ParticleText={this.props.data.nodes[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.nodes[10].ParticleImage} ParticleH2={this.props.data.nodes[10].ParticleH2} ParticleH3={this.props.data.nodes[10].ParticleH3} ParticleText={this.props.data.nodes[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.nodes[10].ParticleImage} ParticleH2={this.props.data.nodes[10].ParticleH2} ParticleH3={this.props.data.nodes[10].ParticleH3} ParticleText={this.props.data.nodes[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.nodes[10].ParticleImage} ParticleH2={this.props.data.nodes[10].ParticleH2} ParticleH3={this.props.data.nodes[10].ParticleH3} ParticleText={this.props.data.nodes[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.nodes[10].ParticleImage} ParticleH2={this.props.data.nodes[10].ParticleH2} ParticleH3={this.props.data.nodes[10].ParticleH3} ParticleText={this.props.data.nodes[10].ParticleText}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.nodes[10].ParticleImage} ParticleH2={this.props.data.nodes[10].ParticleH2} ParticleH3={this.props.data.nodes[10].ParticleH3} ParticleText={this.props.data.nodes[10].ParticleText}/>
                  </Col>
              </Row>
              <Row className='row-flex'>
                  <Col sm={12} className='recommend-headline'>
                      <SectionHeader {...this.props.data.nodes[22]}/>
                  </Col>
              </Row>
              <Row className='articles row-flex'>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.nodes[32]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleTeaser classes="wrapper" ArticleCategory={this.props.data.nodes[33].field_main_topics[0]} ParticleH2={this.props.data.nodes[33].ParticleH2} ParticleText={this.props.data.nodes[33].ParticleText} ContributorList={this.props.data.nodes[33].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img">
                          <ParticleImage {...this.props.data.nodes[34]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large meta-links has-intro-text">
                              <ArticleTeaser classes="wrapper" ArticleCategory={this.props.data.nodes[35].field_main_topics[0]} ParticleH2={this.props.data.nodes[35].ParticleH2} ParticleText={this.props.data.nodes[35].ParticleText} ContributorList={this.props.data.nodes[35].field_contributors}/>
                          </Col>
                      </ArticleTeaser>
                  </Col>
                  <Col sm={9}>
                      <WideImgContainer>
                          <div className="wrapper lg-img">
                              <ParticleImage {...this.props.data.nodes[36]}/>
                              <Col sm={5} smOffset={1} className="article-meta-large">
                                  <MetaLinksContainer>
                                      <ArticleTeaser classes="wrapper" ArticleCategory={this.props.data.nodes[37].field_main_topics[0]} ParticleH2={this.props.data.nodes[37].ParticleH2} ContributorList={this.props.data.nodes[37].field_contributors}/>
                                  </MetaLinksContainer>
                              </Col>
                          </div>
                      </WideImgContainer>
                  </Col>
                  <Col sm={3}>
                      <ArticleTeaser classes="wrapper xtr-sm-img lg-img">
                          <ParticleImage {...this.props.data.nodes[38]}/>
                          <Col sm={11} smOffset={1} className="article-meta-xtr-sm">
                              <MetaLinksContainer>
                                    <ArticleTeaser classes="wrapper" ArticleCategory={this.props.data.nodes[39].field_main_topics[0]} ParticleH2={this.props.data.nodes[39].ParticleH2} ContributorList={this.props.data.nodes[39].field_contributors}/>
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
