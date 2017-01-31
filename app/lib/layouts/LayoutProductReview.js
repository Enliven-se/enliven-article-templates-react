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
import ParticleText from '../components/particles/ParticleText'

class ProductReview extends React.Component {
  render() {
    return (
      <div className='layout layout-product-review'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col md={9} className='header-image'>
                      <Container fluid classes='panel-2' backgroundImage={this.props.data.field_particles[0]}></Container>
                  </Col>
                  <Col md={3}>
                      <ArticleCategory name={this.props.data.field_main_topics[0].name} url={this.props.data.field_main_topics[0].url}/>
                      <ArticleTitle {...this.props.data.field_headline}/>
                      <HR/>
                      <ParticleText {...this.props.data.field_particles_text[0]}/>
                      <HR/>
                      <ContributorList data={this.props.data.field_contributors} inline separator=', '/>
                  </Col>

              </Row>
              <Row className="text-row">
                  <Col md={6} className='col-right first-text'>
                      <ParticleText {...this.props.data.field_particles_text[1]}/>
                  </Col>
                  <Col md={6} className='col-left'>
                      <ParticleText {...this.props.data.field_particles_text[2]}/>
                  </Col>
              </Row>
              <Row>
                  <Col className='col-right' md={6}>
                      <ParticleImage {...this.props.data.field_particles_image[0]}/>
                  </Col>
                  <Col className='col-left' md={6}>
                      <ParticleImage {...this.props.data.field_particles_image[1]}/>
                  </Col>
              </Row>
              <Row className="text-row last-text">
                  <Col md={6} className='col-right'>
                      <ParticleText {...this.props.data.field_particles_text[3]}/>
                  </Col>
                  <Col md={6} className='col-left'>
                      <ParticleText {...this.props.data.field_particles_text[4]}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default ProductReview
