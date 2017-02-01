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
import ArticleIntro from '../components/base/ArticleIntro'
import ParticleH2 from '../components/particles/ParticleH2'

class PictureIntensive2 extends React.Component {
  render() {
    return (
      <div className='layout layout-picture-intensive-2'>
          <Container fluid classes='panel-1'>
              <Row className='header-goodies'>
                  <Col md={6} className='left-panel'>
                      <ArticleCategory name={this.props.data.field_main_topics.name} url={this.props.data.field_main_topics.url}/>
                      <ArticleTitle {...this.props.data.field_headline}/>
                      <ArticleIntro {...this.props.data.field_particles[0]}/>
                      <HR className=''/>
                      <ContributorList data={this.props.data.field_contributors} separator=', '/>
                  </Col>
                  <Col md={6} className='right-panel'>
                      <ParticleImage {...this.props.data.field_particles[1]}/>
                  </Col>
              </Row>
              <Row>
                  <Col md={6} className="removed-padding-col">
                      <Col className='round-image'>
                          <ParticleImage {...this.props.data.field_particles[2]}/>
                          <div className='credits'>
                              <ParticleText {...this.props.data.field_particles[4]}/>
                          </div>
                      </Col>
                      <Col md={6} className='behind-image'>
                          <ParticleImage {...this.props.data.field_particles[3]}/>
                      </Col>

                      <Col md={6} md={12} className=''>
                          <div className='text-with-borderbox responsive-text-1'>
                              <ParticleH2 {...this.props.data.field_particles[5]}/>
                              <ParticleText {...this.props.data.field_particles[8]}/>
                          </div>
                      </Col>
                  </Col>
                  <Col md={6} className='right-side right-aligned-picture'>
                      <div className='text-with-borderbox responsive-text-2'>
                          <ParticleH2 {...this.props.data.field_particles[5]}/>
                          <ParticleText {...this.props.data.field_particles[6]}/>
                      </div>
                      <ParticleImage {...this.props.data.field_particles[7]}/>
                  </Col>
              </Row>
              <Row>
                  <Col md={6} className='centered-picture'>
                      <ParticleImage {...this.props.data.field_particles[7]}/>
                  </Col>
                  <Col md={6} className='text-with-borderbox responsive-text-3'>
                      <ParticleH2 {...this.props.data.field_particles[5]}/>
                      <ParticleText {...this.props.data.field_particles[9]}/>
                  </Col>
              </Row>
                </Container>
            </div>
    )
  }
}

export default PictureIntensive2
