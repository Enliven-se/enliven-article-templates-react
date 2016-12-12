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
                      <Container fluid classes='panel-2' backgroundImage={this.props.data.fields[0]}>
                      </Container>
                  </Col>
                  <Col md={3}>
                      <ArticleCategory {...this.props.data.ArticleCategory}/>
                      <ArticleTitle {...this.props.data.ArticleTitle} />
                      <HR/>
                      <ParticleText {...this.props.data.fields[1]} />
                      <HR/>
                      <ContributorList data={this.props.data.ContributorList} inline separator=', '/>
                  </Col>

              </Row>
              <Row className="text-row">
                  <Col md={6} className='col-right first-text'>
                      <ParticleText {...this.props.data.fields[2]} />
                  </Col>
                  <Col md={6} className='col-left'>
                      <ParticleText {...this.props.data.fields[3]} />
                  </Col>
              </Row>
              <Row>
                  <Col md={6}className='col-right'>
                      <ParticleImage {...this.props.data.fields[4]}/>
                  </Col>
                  <Col md={6}className='col-left'>
                      <ParticleImage {...this.props.data.fields[5]}/>
                  </Col>
              </Row>
              <Row className="text-row">
                  <Col md={6} className='col-right'>
                      <ParticleText {...this.props.data.fields[6]} />
                  </Col>
                  <Col md={6} className='col-left'>
                      <ParticleText {...this.props.data.fields[7]} />
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default ProductReview
