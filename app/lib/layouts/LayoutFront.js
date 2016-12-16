import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Container from '../containers/Container'
import SectionHeader from '../containers/SectionHeader'

import HR from '../components/base/HR'

import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'

class LayoutFront extends React.Component {
  render() {
    return (
      <div className='layout layout-front'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col sm={12} className=''>
                      <h2 className='text-color-gold header-top'>New On Enliven</h2>
                      <HR className=''/>
                  </Col>
              </Row>
              <Row>
                  <Col sm={3} className=''>
                      <div className="wrapper sm-img">
                          <ParticleImage {...this.props.data.fields[0]}/>
                          <div className="article-meta-small">
                              <ParticleText {...this.props.data.fields[1]} />
                          </div>
                      </div>
                  </Col>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[2]}/>
                          { /* <ParticleImage {...this.props.data.fields[16]}/> */ }
                          <Col sm={8} smOffset={2} className="article-meta-large">
                              <ParticleText {...this.props.data.fields[3]} />
                          </Col>
                      </div>
                  </Col>
                  <Col sm={3} className=''>
                      <h2 className='heading-text'>AD SPACE</h2>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[5]}/>
                          <Col sm={8} smOffset={4} className="article-meta-large">
                              <ParticleText {...this.props.data.fields[3]} />
                          </Col>
                      </div>
                  </Col>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[6]}/>
                          <Col sm={8} smOffset={4} className="article-meta-large">
                              <ParticleText {...this.props.data.fields[3]} />
                          </Col>
                      </div>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row className='articles-grid-row-1'>
                  <Col sm={4} className='square-article'>
                      <h2 className='text-color-gold'>Women's Health</h2>
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[14]}/>
                      <ParticleText {...this.props.data.fields[7]} />
                  </Col>
                  <Col sm={4} className='articles-list'>
                      <h2 className='text-color-gold'>Top Articles</h2>
                      <HR className=''/>
                      <ParticleText {...this.props.data.fields[4]} />
                      <div className="more-button">
                          <ParticleText {...this.props.data.fields[9]} />
                      </div>
                  </Col>
                  <Col sm={4} className='square-article'>
                      <h2 className='text-color-gold'>Interior Design</h2>
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[14]}/>
                      <ParticleText {...this.props.data.fields[7]} />

                  </Col>
              </Row>
              <Row className='articles-grid-row-2'>
                  <Col sm={4} className='articles-list'>
                      <h2 className='text-color-gold'>Women's Health</h2>
                      <HR className=''/>
                      <ParticleText {...this.props.data.fields[4]} />
                      <div className="more-button">
                          <ParticleText {...this.props.data.fields[9]} />
                      </div>
                  </Col>
                  <Col sm={4} className='square-article'>
                      <h2 className='text-color-gold'>Top Articles</h2>
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[14]}/>
                      <ParticleText {...this.props.data.fields[7]} />

                      
                  </Col>
                  <Col sm={4} className='articles-list'>
                      <h2 className='text-color-gold'>Interior Design</h2>
                      <HR className=''/>
                      <ParticleText {...this.props.data.fields[4]} />
                      <div className="more-button">
                          <ParticleText {...this.props.data.fields[9]} />
                      </div>
                  </Col>
              </Row>
              <Row>
                  <Col sm={12} className='contributors-headline'>
                      <SectionHeader>OUR CONTRIBUTORS</SectionHeader>
                  </Col>
              </Row>
              <Row className='contributors-grid-row-1'>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2 className='heading-text'>Peter Larsen</h2>
                      <ParticleText {...this.props.data.fields[8]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2 className='heading-text'>Peter Larsen</h2>
                      <ParticleText {...this.props.data.fields[8]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2 className='heading-text'>Peter Larsen</h2>
                      <ParticleText {...this.props.data.fields[8]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2 className='heading-text'>Peter Larsen</h2>
                      <ParticleText {...this.props.data.fields[8]} />
                  </Col>
              </Row>
              <Row className='contributors-grid-row-2'>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2 className='heading-text'>Peter Larsen</h2>
                      <ParticleText {...this.props.data.fields[8]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2 className='heading-text'>Peter Larsen</h2>
                      <ParticleText {...this.props.data.fields[8]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2 className='heading-text'>Peter Larsen</h2>
                      <ParticleText {...this.props.data.fields[8]} />
                  </Col>
                  <Col sm={3} className='about-contributor'>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2 className='heading-text'>Peter Larsen</h2>
                      <ParticleText {...this.props.data.fields[8]} />
                  </Col>
              </Row>
              <Row>
                  <Col sm={12} className='recommend-headline'>
                      <SectionHeader>WE RECOMMEND</SectionHeader>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[5]}/>
                          <Col sm={8} smOffset={4} className="article-meta-large">
                              <ParticleText {...this.props.data.fields[3]} />
                          </Col>
                      </div>
                  </Col>
                  <Col sm={6} className=''>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[6]}/>
                          <Col sm={8} smOffset={4} className="article-meta-large">
                              <ParticleText {...this.props.data.fields[3]} />
                          </Col>
                      </div>
                  </Col>
              </Row>
              <Row>
                  <Col sm={9} className='wide-img'>
                      <div className="wrapper lg-img">
                          <ParticleImage {...this.props.data.fields[11]}/>
                          <Col sm={5} smOffset={1} className="article-meta-large">
                              <ParticleText {...this.props.data.fields[3]} />
                          </Col>
                      </div>
                  </Col>
                  <Col sm={3} className=''>
                      <div className="wrapper xtr-sm-img lg-img">
                          <ParticleImage {...this.props.data.fields[13]}/>
                          <div className="article-meta-small">
                              <ParticleText {...this.props.data.fields[1]} />
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>

      </div>
    )
  }
}

export default LayoutFront
