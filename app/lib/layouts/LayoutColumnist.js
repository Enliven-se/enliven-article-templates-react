

import React from 'react'
import { Row, Col } from 'react-bootstrap'
// window.React = React

import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'

import DatePublished from '../components/base/DatePublished'
import HR from '../components/base/HR'
import Link from '../components/base/Link'
import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'
import ParticlePullquote from '../components/particles/ParticlePullquote'

class LayoutColumnist extends React.Component {
  render() {
    return (
      <div className='layout layout-columnist'>
          <Container fluid classes='panel-1'>
              <Row className='article-header-row'>
                  <Col md={6} className='left-panel'>
                      <ArticleHeader ArticleCategory={this.props.data.field_main_topics[0]} ArticleTitle={this.props.data.field_headline.field_longtext}/>
                      <DatePublished value={this.props.data.created} date_format='Do MMMM YYYY'/>
                  </Col>
                  <Col md={6} className='right-panel'>
                      <Row>
                          <Col md={5}>
                              <ParticleImage {...this.props.data.field_particles[0]}/>
                          </Col>
                      </Row>
                      <Row>
                      </Row>
                      <Col md={7} className='about-columnist'>
                          <div className='follow-button'>
                              { this.props.particles.text[4] ?
                                  <Link text={this.props.particles.text[4].value} url={this.props.particles.text[4].url} classes={this.props.particles.text[4].classes}/>
                                  : null
                              }
                          </div>
                          { this.props.particles.text[3] ?
                              <Link text={this.props.particles.text[3].value} url={this.props.particles.text[3].url} classes={this.props.particles.text[3].classes}/>
                              : null
                          }
                          <ParticleText {...this.props.particles.text[0]}/>
                          { this.props.particles.text[5] ?
                              <Link text={this.props.particles.text[5].value} url={this.props.particles.text[5].url} classes={this.props.particles.text[5].classes}/>
                              : null
                          }
                      </Col>
                  </Col>
              </Row>
              <Row>
                  <Col sm={12} className='hr-container'>
                      <HR className=''/>
                  </Col>
              </Row>
              <Row className='body-text'>
                  <Col sm={12}>
                      <div className='first-text'>
                          <ParticleText {...this.props.particles.text[1]}/>
                      </div>
                      { this.props.particles.pullquote[0] ?
                          <ParticlePullquote {...this.props.particles.pullquote[0]}/>
                          : null
                      }
                      <ParticleText {...this.props.particles.text[2]}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default LayoutColumnist
