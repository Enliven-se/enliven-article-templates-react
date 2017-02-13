import React from 'react'
import { Row, Col } from 'react-bootstrap'
// window.React = React

import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'
import ContributorList from '../containers/ContributorList'
import HR from '../components/base/HR'
import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'

class LayoutFeature extends React.Component {
  render() {
    return (
      <div className='layout layout-feature'>
          <Container fluid classes='panel-1' backgroundImage={this.props.data.field_particles_image[0]}>
              <Row>
                  <Col sm={6} smOffset={6}>
                      <ArticleHeader ArticleCategory={this.props.data.field_main_topics[0]} ArticleTitle={this.props.data.field_headline}/>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={6}>
                      <ContributorList data={this.props.data.field_contributors}/>
                  </Col>
                  <Col sm={6} className='col-right'>
                      <ParticleText {...this.props.data.field_particles_text[0]}/>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col>
                      <ParticleImage {...this.props.data.field_particles_image[1]}/>
                  </Col>
              </Row>
              <Row>
                  <Col className='text-with-columns'>
                      <ParticleText {...this.props.data.field_particles_text[1]}/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <ParticleImage {...this.props.data.field_particles_image[2]}/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <ParticleImage {...this.props.data.field_particles_image[3]}/>
                  </Col>
              </Row>
              <Row>
                  <Col className='text-with-columns'>
                      <ParticleText {...this.props.data.field_particles_text[3]}/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <ParticleImage {...this.props.data.field_particles_image[4]}/>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6} className='half-width-picture'>
                      <ParticleImage {...this.props.data.field_particles_image[5]}/>
                  </Col>
                  <Col sm={6} className='one-column-by-picture'>
                      <ParticleText {...this.props.data.field_particles_text[4]}/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <ParticleImage {...this.props.data.field_particles_image[6]}/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <ParticleImage {...this.props.data.field_particles_image[7]}/>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6} className='col-right'>
                      <ParticleText {...this.props.data.field_particles_text[5]}/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <ParticleImage {...this.props.data.field_particles_image[8]}/>
                  </Col>
              </Row>
              <Row>
                  <Col className='text-with-columns'>
                      <ParticleText {...this.props.data.field_particles_text[6]}/>
                      <HR/>
                      <ParticleText {...this.props.data.field_particles_text[7]}/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <ParticleImage {...this.props.data.field_particles_image[9]}/>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6} className='col-left'>
                      <ParticleText {...this.props.data.field_particles_text[8]}/>
                  </Col>
                  <Col sm={6} className='half-width-picture col-right'>
                      <ParticleImage {...this.props.data.field_particles_image[10]}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default LayoutFeature
