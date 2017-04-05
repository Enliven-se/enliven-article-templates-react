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
import ParticleSubheader from '../components/particles/ParticleSubheader'
import ParticlePullquote from '../components/particles/ParticlePullquote'
import ParticleText from '../components/particles/ParticleText'

class PictureIntensive extends React.Component {
  render() {
    return (
      <div className='layout layout-picture-intensive'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col className='article-category-container'>
                      <ArticleCategory name={this.props.data.field_main_topics[0].name} url={this.props.data.field_main_topics[0].url}/>
                  </Col>
              </Row>
              <Row>
                  <div className='header-image'>
                      <Container fluid classes='panel-2' backgroundImage={this.props.data.field_particles_media[0]}></Container>
                  </div>
                  <Col md={4} className='article-meta-col'>
                      <div className='article-meta'>
                          <ArticleTitle {...this.props.data.field_headline}/>
                          <ParticleText {...this.props.data.field_particles_text[0]}/>
                          <HR/>
                          <ContributorList data={this.props.data.field_contributors} inline separator=', '/>
                      </div>
                  </Col>
              </Row>
              <Row className='big-row first-text row-flex'>
                  <Col sm={6} smOffset={3} mdOffset={2}>
                      <ParticleText {...this.props.data.field_particles_text[1]}/>
                  </Col>
                  <Col sm={4} md={3} className="pullquote-container">
                      <ParticlePullquote {...this.props.data.field_particles_pullquote[0]}/>
                  </Col>
              </Row>
              <Row className='big-row big-image'>
                  <div className='big-image-div'>
                      <Container fluid classes='panel-3' backgroundImage={this.props.data.field_particles_media[1]}>
                          <div className='text-field-in-img'>
                              <ParticleText {...this.props.data.field_particles_text[3]}/>
                          </div>
                      </Container>
                  </div>
              </Row>
              <Row className='big-row'>
                  <Col sm={6} smOffset={2}>
                      <ParticleSubheader {...this.props.data.field_particles_h2[0]}/>
                      <HR/>
                      <ParticleText {...this.props.data.field_particles_text[2]}/>
                  </Col>
              </Row>
              <Row className='big-row small-image'>
                  <Col sm={6}>
                      <ParticleImage {...this.props.data.field_particles_media[2]}/>
                  </Col>
                  <Col sm={6}>
                      <ParticleImage {...this.props.data.field_particles_media[3]}/>
                  </Col>
              </Row>
              <Row className='big-row row-flex'>
                  <Col sm={6} smOffset={3} mdOffset={2}>
                      <ParticleText {...this.props.data.field_particles_text[4]}/>
                  </Col>
                  <Col sm={4} md={3} className="pullquote-container">
                      <ParticlePullquote {...this.props.data.field_particles_pullquote[1]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
  }
}

export default PictureIntensive
