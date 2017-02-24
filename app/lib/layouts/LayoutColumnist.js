

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
                      <ArticleHeader ArticleCategory={this.props.data.field_main_topics[0]} ArticleTitle={this.props.data.field_headline}/>
                      <DatePublished value={this.props.data.created} date_format='Do MMMM YYYY'/>
                  </Col>
                  <Col md={6} className='right-panel'>
                      <Col md={5}>
                          <ParticleImage {...this.props.data.field_particles_media[0]}/>
                      </Col>
                      <Col md={7} className='about-columnist'>
                          <div className='follow-button'>
                              <Link text={this.props.data.field_particles_text[4].value} url={this.props.data.field_particles_text[4].url} classes={this.props.data.field_particles_text[4].classes}/>
                          </div>
                          <Link text={this.props.data.field_particles_text[3].value} url={this.props.data.field_particles_text[3].url} classes={this.props.data.field_particles_text[3].classes}/>
                          <ParticleText {...this.props.data.field_particles_text[0]}/>
                          <Link text={this.props.data.field_particles_text[5].value} url={this.props.data.field_particles_text[5].url} classes={this.props.data.field_particles_text[5].classes}/>
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
                          <ParticleText {...this.props.data.field_particles_text[1]}/>
                      </div>
                      <ParticlePullquote {...this.props.data.field_particles_pullquote[0]}/>
                      <ParticleText {...this.props.data.field_particles_text[2]}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default LayoutColumnist
