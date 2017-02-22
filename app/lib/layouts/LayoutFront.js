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
                      <ParticleH2 className='text-color-gold header-top' classes="text-color-gold" type="text" value="Women's Health"/>
                      <HR/>
                  </Col>
                  <Col sm={3}>
                      <ArticleTeaser
                          classes="wrapper"
                          metaLinksClasses="article-meta-small"
                          ParticleImage={this.props.data.list[0].field_particles_media[0]}
                          ArticleCategory={this.props.data.list[0].field_main_topics[0]}
                          ParticleH2={this.props.data.list[0].headline}
                          ContributorList={this.props.data.list[0].field_contributors}
                      />
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser
                          classes="wrapper lg-img first-center-img"
                          metaLinksClasses="article-meta-large-centered article-meta-large-centered"
                          ParticleImage={this.props.data.list[1].field_particles_media[0]}
                          ArticleCategory={this.props.data.list[1].field_main_topics[0]}
                          ParticleH2={this.props.data.list[1].headline}
                          ContributorList={this.props.data.list[1].field_contributors}
                      />
                  </Col>
                  <Col sm={3}>
                      <ParticleH2 className='heading-text' type="text" value="Ad Space" />
                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
                          ParticleImage={this.props.data.list[2].field_particles_media[0]}
                          ArticleCategory={this.props.data.list[2].field_main_topics[0]}
                          ParticleH2={this.props.data.list[2].headline}
                          ParticleText={this.props.data.list[2].field_particles_text[0]}
                          ContributorList={this.props.data.list[2].field_contributors}
                      />
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
                          ParticleImage={this.props.data.list[3].field_particles_media[0]}
                          ArticleCategory={this.props.data.list[3].field_main_topics[0]}
                          ParticleH2={this.props.data.list[3].headline}
                          ParticleText={this.props.data.list[3].field_particles_text[0]}
                          ContributorList={this.props.data.list[3].field_contributors}
                      />
                  </Col>
              </Row>
              <Row className='articles-grid row-flex'>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Interior Design"/>
                          <HR/>
                          <ParticleImage {...this.props.data.list[4].field_particles_media[0]}/>
                          <ArticleTeaser classes="wrapper"
                              ParticleH2={this.props.data.list[4].headline}
                              //   ParticleText={this.props.data.list[4].field_particles_text[0]}
                              ContributorList={this.props.data.list[4].field_contributors}
                          />
                      </SquareArticleContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Top Articles"/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText type="text" value='<strong class="bold-bits">Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos.</strong>'/>
                              <ParticleText type="text" value="Take a Tip From Ashley and Mary-Kate Olsen and Stock Up on Chic Basics for Under $500"/>
                              <ParticleText type="text" value="Hailey Baldwin Takes Red Carpet Denim Dressing to the Streets"/>
                              <ParticleText type="text" value="Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos"/>
                              <div className="more-button">
                                  <Link text="More" url="#"/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Top Articles"/>
                          <HR/>
                          <ParticleImage {...this.props.data.list[5].field_particles_media[0]}/>
                          <ArticleTeaser classes="wrapper"
                              ParticleH2={this.props.data.list[5].headline}
                              //   ParticleText={this.props.data.list[5].field_particles_text[0]}
                              ContributorList={this.props.data.list[5].field_contributors}
                          />
                      </SquareArticleContainer>
                  </Col>
                  <Col sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Women's Health"/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText type="text" value='<strong class="bold-bits">Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos.</strong>'/>
                              <ParticleText type="text" value="Take a Tip From Ashley and Mary-Kate Olsen and Stock Up on Chic Basics for Under $500"/>
                              <ParticleText type="text" value="Hailey Baldwin Takes Red Carpet Denim Dressing to the Streets"/>
                              <ParticleText type="text" value="Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos"/>
                              <div className="more-button">
                                  <Link text="More" url="#"/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <SquareArticleContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Top Articles"/>
                          <HR/>
                          <ParticleImage {...this.props.data.list[6].field_particles_media[0]}/>
                          <ArticleTeaser classes="wrapper"
                              ParticleH2={this.props.data.list[6].headline}
                              //   ParticleText={this.props.data.list[6].field_particles_text[0]}
                              ContributorList={this.props.data.list[6].field_contributors}
                          />
                      </SquareArticleContainer>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Interior Design"/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText type="text" value='<strong class="bold-bits">Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos.</strong>'/>
                              <ParticleText type="text" value="Take a Tip From Ashley and Mary-Kate Olsen and Stock Up on Chic Basics for Under $500"/>
                              <ParticleText type="text" value="Hailey Baldwin Takes Red Carpet Denim Dressing to the Streets"/>
                              <ParticleText type="text" value="Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos"/>
                              <div className="more-button">
                                  <Link text="More" url="#"/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
              </Row>
              {/* <Row className='row-flex'>
                  <Col sm={12} className='contributors-headline'>
                      <SectionHeader classes="text-uppercase" type="text" value="Our Contributors"/>
                  </Col>
                  </Row>
                  <Row className='contributors-grid'>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.list[11].field_particles_media[0]} ParticleH2={this.props.data.list[11].headline} ParticleH3={this.props.data.list[11].field_particles_h3[0]} ParticleText={this.props.data.list[11].field_particles_text[0]}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.list[11].field_particles_media[0]} ParticleH2={this.props.data.list[11].headline} ParticleH3={this.props.data.list[11].field_particles_h3[0]} ParticleText={this.props.data.list[11].field_particles_text[0]}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.list[11].field_particles_media[0]} ParticleH2={this.props.data.list[11].headline} ParticleH3={this.props.data.list[11].field_particles_h3[0]} ParticleText={this.props.data.list[11].field_particles_text[0]}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.list[11].field_particles_media[0]} ParticleH2={this.props.data.list[11].headline} ParticleH3={this.props.data.list[11].field_particles_h3[0]} ParticleText={this.props.data.list[11].field_particles_text[0]}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.list[11].field_particles_media[0]} ParticleH2={this.props.data.list[11].headline} ParticleH3={this.props.data.list[11].field_particles_h3[0]} ParticleText={this.props.data.list[11].field_particles_text[0]}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.list[11].field_particles_media[0]} ParticleH2={this.props.data.list[11].headline} ParticleH3={this.props.data.list[11].field_particles_h3[0]} ParticleText={this.props.data.list[11].field_particles_text[0]}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.list[11].field_particles_media[0]} ParticleH2={this.props.data.list[11].headline} ParticleH3={this.props.data.list[11].field_particles_h3[0]} ParticleText={this.props.data.list[11].field_particles_text[0]}/>
                  </Col>
                  <Col sm={3}>
                      <AboutContributorContainer ParticleImage={this.props.data.list[11].field_particles_media[0]} ParticleH2={this.props.data.list[11].headline} ParticleH3={this.props.data.list[11].field_particles_h3[0]} ParticleText={this.props.data.list[11].field_particles_text[0]}/>
                  </Col>
                  </Row>
                  <Row className='row-flex'>
                  <Col sm={12} className='recommend-headline'>
                      <SectionHeader classes="text-uppercase" type="text" value="We Recommend"/>
                  </Col>
                  </Row>
                  <Row className='articles row-flex'>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
                          ParticleImage={this.props.data.list[7].field_particles_media[0]}
                          ArticleCategory={this.props.data.list[7].field_main_topics[0]}
                          ParticleText={this.props.data.list[7].field_particles_text[0]}
                          ParticleH2={this.props.data.list[7].headline}
                          ContributorList={this.props.data.list[7].field_contributors}
                      />
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
                          ParticleImage={this.props.data.list[8].field_particles_media[0]}
                          ParticleText={this.props.data.list[8].field_particles_text[0]}
                          ArticleCategory={this.props.data.list[8].field_main_topics[0]}
                          ParticleH2={this.props.data.list[8].headline}
                          ContributorList={this.props.data.list[8].field_contributors}
                      />
                  </Col>
                  <Col sm={9}>
                      <WideImgContainer>
                          <div className="wrapper">
                              <ParticleImage {...this.props.data.list[9].field_particles_media[0]}/>
                              <div className="article-meta-large article-meta-large-left">
                                  <ArticleCategory {...this.props.data.list[9].field_main_topics[0]}/>
                                  <ParticleH2 {...this.props.data.list[9].headline}/>
                                  <ContributorList data={this.props.data.list[9].field_contributors}/>
                              </div>
                          </div>
                      </WideImgContainer>
                  </Col>
                  <Col sm={3}>
                      <ArticleTeaser classes="wrapper xtr-sm-img" metaLinksClasses="article-meta-xtr-sm"
                          ParticleImage={this.props.data.list[10].field_particles_media[0]}
                          ArticleCategory={this.props.data.list[10].field_main_topics[0]}
                          ParticleH2={this.props.data.list[10].headline}
                          ContributorList={this.props.data.list[10].field_contributors}
                      />
                  </Col>
              </Row> */}
          </Container>
      </div>
    )
  }
}

export default LayoutFront
