import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Container from '../containers/Container'
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
                      <h2 className='text-color-gold'>New On Enliven</h2>
                      <HR className=''/>
                  </Col>
              </Row>
              <Row>
                  <Col sm={3} className='sm-img'>
                      <ParticleImage {...this.props.data.fields[0]}/>
                      <div className="article-meta-small">
                          <ParticleText {...this.props.data.fields[1]} />
                      </div>
                  </Col>
                  <Col sm={6} className='lg-img'>
                      <ParticleImage {...this.props.data.fields[2]}/>
                      <div className="article-meta-large">
                          <ParticleText {...this.props.data.fields[3]} />
                      </div>
                  </Col>
                  <Col sm={3} className=''>
                      <h2>AD SPACE</h2>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={6} className='lg-img'>
                      <ParticleImage {...this.props.data.fields[5]}/>
                      <div className="article-meta-large">
                          <ParticleText {...this.props.data.fields[3]} />
                      </div>
                  </Col>
                  <Col sm={6} className='lg-img'>
                      <ParticleImage {...this.props.data.fields[6]}/>
                      <div className="article-meta-large">
                          <ParticleText {...this.props.data.fields[3]} />
                      </div>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={4} className=''>
                      <h2 className='text-color-gold'>Women's Health</h2>
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[14]}/>

                  </Col>
                  <Col sm={4} className=''>
                      <h2 className='text-color-gold'>Top Articles</h2>
                      <HR className=''/>
                  </Col>
                  <Col sm={4} className=''>
                      <h2 className='text-color-gold'>Interior Design</h2>
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[14]}/>

                  </Col>
              </Row>
              <Row>
                  <Col sm={4} className=''>
                      <h2 className='text-color-gold'>Women's Health</h2>
                      <HR className=''/>
                  </Col>
                  <Col sm={4} className=''>
                      <h2 className='text-color-gold'>Top Articles</h2>
                      <HR className=''/>
                      <ParticleImage {...this.props.data.fields[14]}/>

                  </Col>
                  <Col sm={4} className=''>
                      <h2 className='text-color-gold'>Interior Design</h2>
                      <HR className=''/>
                  </Col>
              </Row>
              <Row>
                  <Col sm={12} className=''>
                      <h2>OUR CONTRIBURORS</h2>
                  </Col>
              </Row>
              <Row>
                  <Col sm={3} className=''>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2>Peter Larsen</h2>
                  </Col>
                  <Col sm={3} className=''>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2>Peter Larsen</h2>
                  </Col>
                  <Col sm={3} className=''>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2>Peter Larsen</h2>
                  </Col>
                  <Col sm={3} className=''>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2>Peter Larsen</h2>
                  </Col>
              </Row>
              <Row>
                  <Col sm={3} className=''>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2>Peter Larsen</h2>
                  </Col>
                  <Col sm={3} className=''>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2>Peter Larsen</h2>
                  </Col>
                  <Col sm={3} className=''>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2>Peter Larsen</h2>
                  </Col>
                  <Col sm={3} className=''>
                      <ParticleImage {...this.props.data.fields[10]}/>
                      <h2>Peter Larsen</h2>
                  </Col>
              </Row>
              <Row>
                  <Col sm={12} className=''>
                      <h2>WE RECOMMEND</h2>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6} className='lg-img'>
                      <ParticleImage {...this.props.data.fields[5]}/>
                      <div className="article-meta-large">
                          <ParticleText {...this.props.data.fields[3]} />
                      </div>
                  </Col>
                  <Col sm={6} className='lg-img'>
                      <ParticleImage {...this.props.data.fields[6]}/>
                      <div className="article-meta-large">
                          <ParticleText {...this.props.data.fields[3]} />
                      </div>
                  </Col>
              </Row>
              <Row>
                  <Col sm={10} className='wide-img'>
                      <ParticleImage {...this.props.data.fields[11]}/>
                      <div className="article-meta-large">
                          <ParticleText {...this.props.data.fields[3]} />
                      </div>
                  </Col>
                  <Col sm={2} className='xtr-sm-img'>
                      <ParticleImage {...this.props.data.fields[13]}/>
                      <div className="article-meta-small">
                          <ParticleText {...this.props.data.fields[1]} />
                      </div>
                  </Col>
              </Row>
              <Row>
                  <Col sm={12} className=''>
                      <h2>FOOTER</h2>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default LayoutFront
