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
import ParticlePullquote from '../components/particles/ParticlePullquote'
import ParticleText from '../components/particles/ParticleText'

class ProductReview extends React.Component {
  render() {
    return (
      <div className='layout layout-product-review'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col md={9} className='header-image'>
                      <Container fluid classes='panel-2' backgroundImage={this.props.data.field_particles[0]}>
                      </Container>
                  </Col>
                  <Col md={3}>
                      <ArticleCategory name={this.props.data.field_main_topics.name} url={this.props.data.field_main_topics.url}/>
                      <ArticleTitle {...this.props.data.field_headline} />
                      <HR/>
                      <ParticleText {...this.props.data.field_particles[1]} />
                      <HR/>
                      <ContributorList data={this.props.data.field_contributors} inline separator=', '/>
                  </Col>

              </Row>
              <Row className="text-row">
                  <Col md={6} className='col-right first-text'>
                      <ParticleText {...this.props.data.field_particles[2]} />
                  </Col>
                  <Col md={6} className='col-left'>
                      <ParticleText {...this.props.data.field_particles[3]} />
                  </Col>
              </Row>
              <Row>
                  <Col md={6}className='col-right'>
                      <ParticleImage {...this.props.data.field_particles[4]}/>
                  </Col>
                  <Col md={6}className='col-left'>
                      <ParticleImage {...this.props.data.field_particles[5]}/>
                  </Col>
              </Row>
              <Row className="text-row last-text">
                  <Col md={6} className='col-right'>
                      <ParticleText {...this.props.data.field_particles[6]} />
                  </Col>
                  <Col md={6} className='col-left'>
                      <ParticleText {...this.props.data.field_particles[7]} />
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default ProductReview
