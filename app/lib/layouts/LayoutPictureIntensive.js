import React from 'react'
import { Row, Col } from 'react-bootstrap'

// containers
import ArticleHeader from '../containers/ArticleHeader'
import Container from '../containers/Container'
import ContributorList from '../containers/ContributorList'

// components
import ArticleCategory from '../components/base/ArticleCategory'
import ArticleTitle from '../components/base/ArticleTitle'
import HR from '../components/base/HR'
import ParticleImage from '../components/particles/ParticleImage'
import ParticleH4 from '../components/particles/ParticleH4'
import ParticlePullquote from '../components/particles/ParticlePullquote'
import ParticleText from '../components/particles/ParticleText'

class PictureIntensive extends React.Component {
  render() {
    return (
      <div className='layout layout-picture-intensive'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col className='article-category-container'>
                      <ArticleCategory name={this.props.data.field_main_topics.name} url={this.props.data.field_main_topics.url}/>
                  </Col>
              </Row>
              <Row>
                  <Col md={10} className='header-image'>
                      <Container fluid classes='panel-2' backgroundImage={this.props.data.field_particles[1]}></Container>
                  </Col>
                  <Col md={4} className='article-meta-col'>
                      <div className='article-meta'>
                          <ArticleTitle {...this.props.data.field_headline}/>
                          <ParticleText {...this.props.data.field_particles[0]}/>
                          <HR/>
                          <ContributorList data={this.props.data.field_contributors} inline separator=', '/>
                      </div>
                  </Col>
              </Row>
              <Row className='big-row first-text'>
                  <Col sm={6} smOffset={3} mdOffset={2}>
                      <ParticleText {...this.props.data.field_particles[2]}/>
                  </Col>
                  <Col sm={4} md={3} className="pullquote-container">
                      <ParticlePullquote {...this.props.data.field_particles[3]}/>
                  </Col>
              </Row>
              <Row className='big-row big-image'>
                  <Col xs={12}>
                      <Container fluid classes='panel-3' backgroundImage={this.props.data.field_particles[4]}>
                          <Col sm={3} className='text-field-in-img'>
                              <ParticleH4 {...this.props.data.field_particles[7]}/>
                              <ParticleText {...this.props.data.field_particles[8]}/>
                              <ParticleText {...this.props.data.field_particles[6]}/>
                          </Col>
                      </Container>
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col sm={6} smOffset={2}>
                      <ParticleText {...this.props.data.field_particles[5]}/>
                  </Col>
              </Row>
              <Row className='big-row small-image'>
                  <Col sm={6}>
                      <ParticleImage {...this.props.data.field_particles[9]}/>
                  </Col>
                  <Col sm={6}>
                      <ParticleImage {...this.props.data.field_particles[10]}/>
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col sm={6} smOffset={3} mdOffset={2}>
                      <ParticleText {...this.props.data.field_particles[11]}/>
                  </Col>
                  <Col sm={4} md={3} className="pullquote-container">
                      <ParticlePullquote {...this.props.data.field_particles[12]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
  }
}

export default PictureIntensive
