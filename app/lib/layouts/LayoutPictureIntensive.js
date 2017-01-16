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
                  <Col md={12} className='article-category-container'>
                      <ArticleCategory {...this.props.data.ArticleCategory}/>
                  </Col>
                  <Col md={10} className='header-image'>
                      <Container fluid classes='panel-2' backgroundImage={this.props.data.fields[1]}>
                          <Col md={4} mdOffset={9} className='article-meta'>
                              <ArticleTitle {...this.props.data.ArticleTitle} />
                              <ParticleText {...this.props.data.fields[0]} />
                              <HR/>
                              <ContributorList data={this.props.data.ContributorList} inline separator=', '/>

                          </Col>
                      </Container>
                  </Col>

              </Row>
              <Row className='big-row first-text'>
                  <Col md={6} mdOffset={2}>
                      <ParticleText {...this.props.data.fields[2]} />
                  </Col>
                  <Col md={3} className="pullquote-container">
                      <ParticlePullquote {...this.props.data.fields[3]} />
                  </Col>
              </Row>
              <Row className='big-row big-image'>
                  <Col md={12}>
                      <Container fluid classes='panel-3' backgroundImage={this.props.data.fields[4]}>
                          <Col md={3} className='text-field-in-img'>
                              <ParticleH4 {...this.props.data.fields[7]}/>
                              <ParticleText {...this.props.data.fields[8]}/>
                              <ParticleText {...this.props.data.fields[6]}/>

                          </Col>
                      </Container>
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col md={6} mdOffset={2}>
                      <ParticleText {...this.props.data.fields[5]} />
                  </Col>
              </Row>
              <Row className='big-row small-image'>
                  <Col md={6}>
                      <ParticleImage {...this.props.data.fields[9]}/>
                  </Col>
                  <Col md={6}>
                      <ParticleImage {...this.props.data.fields[10]}/>
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col md={6} mdOffset={2}>
                      <ParticleText {...this.props.data.fields[11]} />
                  </Col>
                  <Col md={2} mdOffset={1} className="pullquote-container">
                      <ParticlePullquote {...this.props.data.fields[12]} />
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default PictureIntensive
