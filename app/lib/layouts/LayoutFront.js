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
              <h2 className='text-color-gold header-top'>New On Enliven</h2>
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
              { /* <ParticleImage {...this.props.data.fields[16]}/> */ }
              <Col sm={8} smOffset={2} className="article-meta-large">
                <ParticleText {...this.props.data.fields[3]} />
              </Col>
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
              <Col sm={8} smOffset={3} className="article-meta-large">
                <ParticleText {...this.props.data.fields[3]} />
              </Col>
            </Col>
            <Col sm={6} className='lg-img'>
              <ParticleImage {...this.props.data.fields[6]}/>
              <Col sm={8} smOffset={3} className="article-meta-large">
                <ParticleText {...this.props.data.fields[3]} />
              </Col>
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
              <HR className='heading-line'/>
              <h2>OUR CONTRIBURORS</h2>
            </Col>
          </Row>
          <Row className='contributors-grid-row-1'>
            <Col sm={3} className='about-contributor'>
              <ParticleImage {...this.props.data.fields[10]}/>
              <h2>Peter Larsen</h2>
              <ParticleText {...this.props.data.fields[8]} />
            </Col>
            <Col sm={3} className='about-contributor'>
              <ParticleImage {...this.props.data.fields[10]}/>
              <h2>Peter Larsen</h2>
              <ParticleText {...this.props.data.fields[8]} />
            </Col>
            <Col sm={3} className='about-contributor'>
              <ParticleImage {...this.props.data.fields[10]}/>
              <h2>Peter Larsen</h2>
              <ParticleText {...this.props.data.fields[8]} />
            </Col>
            <Col sm={3} className='about-contributor'>
              <ParticleImage {...this.props.data.fields[10]}/>
              <h2>Peter Larsen</h2>
              <ParticleText {...this.props.data.fields[8]} />
            </Col>
          </Row>
          <Row className='contributors-grid-row-2'>
            <Col sm={3} className='about-contributor'>
              <ParticleImage {...this.props.data.fields[10]}/>
              <h2>Peter Larsen</h2>
              <ParticleText {...this.props.data.fields[8]} />
            </Col>
            <Col sm={3} className='about-contributor'>
              <ParticleImage {...this.props.data.fields[10]}/>
              <h2>Peter Larsen</h2>
              <ParticleText {...this.props.data.fields[8]} />
            </Col>
            <Col sm={3} className='about-contributor'>
              <ParticleImage {...this.props.data.fields[10]}/>
              <h2>Peter Larsen</h2>
              <ParticleText {...this.props.data.fields[8]} />
            </Col>
            <Col sm={3} className='about-contributor'>
              <ParticleImage {...this.props.data.fields[10]}/>
              <h2>Peter Larsen</h2>
              <ParticleText {...this.props.data.fields[8]} />
            </Col>
          </Row>
          <Row>
            <Col sm={12} className='recommend-headline'>
              <HR className='heading-line'/>
              <h2>WE RECOMMEND</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={6} className='lg-img'>
              <ParticleImage {...this.props.data.fields[5]}/>
              <Col sm={8} smOffset={3} className="article-meta-large">
                <ParticleText {...this.props.data.fields[3]} />
              </Col>
            </Col>
            <Col sm={6} className='lg-img'>
              <ParticleImage {...this.props.data.fields[6]}/>
              <Col sm={8} smOffset={3} className="article-meta-large">
                <ParticleText {...this.props.data.fields[3]} />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col sm={9} className='wide-img'>
              <ParticleImage {...this.props.data.fields[11]}/>
              <Col sm={8} smOffset={1} className="article-meta-wide">
                <ParticleText {...this.props.data.fields[3]} />
              </Col>
            </Col>
            <Col sm={3} className='xtr-sm-img'>
              <ParticleImage {...this.props.data.fields[13]}/>
              <Col sm={11}  smOffset={1} className="article-meta-thin">
                <ParticleText {...this.props.data.fields[1]} />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className=''>
              
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default LayoutFront
