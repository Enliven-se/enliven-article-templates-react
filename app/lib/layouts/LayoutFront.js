import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Container from '../containers/Container'
import SectionHeader from '../containers/SectionHeader'
import ContributorList from '../containers/ContributorList'

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
              <Row className='articles'>
                  <Col sm={12} className=''>
                      <ParticleH2 className='text-color-gold header-top' {...this.props.data.fields[17]}/>
                      <HR className=''/>
                  </Col>
                  <Col sm={3} className=''>
                      <div className="wrapper sm-img">
                          <ParticleImage {...this.props.data.fields[0]}/>
                          <div className="article-meta-small">
                              <div className="meta-links">
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[2]} />
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img first-center-img">
                          <ParticleImage {...this.props.data.fields[3]}/>
                          <Col sm={8} smOffset={2} className="article-meta-large">
                              <div className="meta-links">
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[4]} />
                              </div>
                          </Col>
                      </div>
                  </Col>
                  <Col sm={3} className=''>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[16]} />
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[5]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large">
                              <div className="meta-links has-intro-text">
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[4]} />
                                  <ParticleText {...this.props.data.fields[26]} />
                              </div>
                          </Col>
                      </div>
                  </Col>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[6]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large">
                              <div className="meta-links has-intro-text">
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[4]} />
                                  <ParticleText {...this.props.data.fields[26]} />
                              </div>
                          </Col>
                      </div>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row className='articles-grid'>
                  <Col xs={12} sm={6} md={4} className='square-article'>
                      <ParticleH2 className='text-color-gold' {...this.props.data.fields[17]} />
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[7]}/>
                      <ParticleH2 {...this.props.data.fields[4]} />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='articles-list'>
                      <ParticleH2 className='text-color-gold' {...this.props.data.fields[18]} />
                      <HR className=''/>
                      <div className='articles-list-text'>
                          <ParticleText {...this.props.data.fields[8]} />
                          <ParticleText {...this.props.data.fields[23]} />
                          <ParticleText {...this.props.data.fields[24]} />
                          <ParticleText {...this.props.data.fields[25]} />
                          <div className="more-button">
                              <Link text={this.props.data.fields[9].content.html} url={this.props.data.fields[9].url}/>
                          </div>
                      </div>
                  </Col>
                  <Col xs={12} sm={6} md={4} className='square-article'>
                      <ParticleH2 className='text-color-gold' {...this.props.data.fields[19]} />
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[7]}/>
                      <ParticleH2 {...this.props.data.fields[4]} />
                  </Col>
                  <Col sm={6} md={4} className='articles-list'>
                      <ParticleH2 className='text-color-gold' {...this.props.data.fields[17]} />
                      <HR className=''/>
                      <div className='articles-list-text'>
                          <ParticleText {...this.props.data.fields[8]} />
                          <ParticleText {...this.props.data.fields[23]} />
                          <ParticleText {...this.props.data.fields[24]} />
                          <ParticleText {...this.props.data.fields[25]} />
                          <div className="more-button">
                              <Link text={this.props.data.fields[9].content.html} url={this.props.data.fields[9].url}/>
                          </div>
                      </div>
                  </Col>
                  <Col xs={12} sm={6} md={4} className='square-article'>
                      <ParticleH2 className='text-color-gold' {...this.props.data.fields[18]} />
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[7]}/>
                      <ParticleH2 {...this.props.data.fields[4]} />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='articles-list'>
                      <ParticleH2 className='text-color-gold' {...this.props.data.fields[19]} />
                      <HR className=''/>
                      <div className='articles-list-text'>
                          <ParticleText {...this.props.data.fields[8]} />
                          <ParticleText {...this.props.data.fields[23]} />
                          <ParticleText {...this.props.data.fields[24]} />
                          <ParticleText {...this.props.data.fields[25]} />
                          <div className="more-button">
                              <Link text={this.props.data.fields[9].content.html} url={this.props.data.fields[9].url}/>
                          </div>
                      </div>
                  </Col>
              </Row>
              <Row>
                  <Col sm={12} className='contributors-headline'>
                      <SectionHeader {...this.props.data.fields[21]}/>
                  </Col>
              </Row>
              <Row className='contributors-grid'>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[20]} />
                      <ParticleH3 {...this.props.data.fields[11]} />
                      <ParticleText {...this.props.data.fields[12]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[20]} />
                      <ParticleH3 {...this.props.data.fields[11]} />
                      <ParticleText {...this.props.data.fields[12]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[20]} />
                      <ParticleH3 {...this.props.data.fields[11]} />
                      <ParticleText {...this.props.data.fields[12]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[20]} />
                      <ParticleH3 {...this.props.data.fields[11]} />
                      <ParticleText {...this.props.data.fields[12]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[20]} />
                      <ParticleH3 {...this.props.data.fields[11]} />
                      <ParticleText {...this.props.data.fields[12]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[20]} />
                      <ParticleH3 {...this.props.data.fields[11]} />
                      <ParticleText {...this.props.data.fields[12]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[20]} />
                      <ParticleH3 {...this.props.data.fields[11]} />
                      <ParticleText {...this.props.data.fields[12]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <ParticleH2 className='heading-text' {...this.props.data.fields[20]} />
                      <ParticleH3 {...this.props.data.fields[11]} />
                      <ParticleText {...this.props.data.fields[12]} />
                  </Col>
              </Row>
              <Row>
                  <Col sm={12} className='recommend-headline'>
                      <SectionHeader {...this.props.data.fields[22]}/>
                  </Col>
              </Row>
              <Row className='articles'>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[5]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large">
                              <div className="meta-links has-intro-text">
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[4]} />
                                  <ParticleText {...this.props.data.fields[26]} />
                              </div>
                          </Col>
                      </div>
                  </Col>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[6]}/>
                          <Col sm={8} smOffset={3} className="article-meta-large">
                              <div className="meta-links has-intro-text">
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[4]} />
                                  <ParticleText {...this.props.data.fields[26]} />
                              </div>
                          </Col>
                      </div>
                  </Col>
                  <Col sm={9} className='wide-img'>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[13]}/>
                          <Col sm={5} smOffset={1} className="article-meta-large">
                              <div className="meta-links">
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[4]} />
                              </div>
                          </Col>
                      </div>
                  </Col>
                  <Col sm={3} className=''>
                      <div className="wrapper xtr-sm-img lg-img">
                          <ParticleImage {...this.props.data.fields[14]}/>
                          <Col sm={11} smOffset={1} className="article-meta-xtr-sm">
                              <div className="meta-links">
                                  <ArticleCategory {...this.props.data.fields[1]}/>
                                  <ParticleH2 {...this.props.data.fields[2]} />
                                  <Link {...this.props.data.fields[3]} />
                              </div>
                          </Col>
                      </div>
                  </Col>
              </Row>
          </Container>

      </div>
    )
  }
}

export default LayoutFront
