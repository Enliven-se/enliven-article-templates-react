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
import ArticleIntro from '../components/base/ArticleIntro'
import ParticleSubheader from '../components/particles/ParticleSubheader'

class PictureIntensive2 extends React.Component {
  render() {
    return (
      <div className='layout layout-picture-intensive-2'>
          <Container fluid classes='panel-1'>
              <Row className='header-goodies'>
                  <Col md={6} className='left-panel'>
                      <ArticleCategory name={this.props.data.field_main_topics[0].name} url={this.props.data.field_main_topics[0].url}/>
                      <ArticleTitle {...this.props.data.field_headline.field_longtext}/>
                      <ArticleIntro {...this.props.data.field_particles[0]}/>
                      <HR className=''/>
                      <ContributorList data={this.props.data.field_contributors} separator=', '/>
                  </Col>
                  <Col md={6} className='right-panel'>
                      <ParticleImage {...this.props.data.field_particles[0]}/>
                  </Col>
              </Row>
              <Row>
                  <Col md={6} className="removed-padding-col">
                      <div className='round-image'>
                          <ParticleImage {...this.props.data.field_particles[1]}/>
                      </div>
                      <div className='behind-image'>
                          <ParticleImage {...this.props.data.field_particles[2]}/>
                      </div>
                      <div>
                          <div className='text-with-borderbox responsive-text-2'>
                              <ParticleSubheader {...this.props.particles.h2[0]}/>
                              <ParticleText {...this.props.particles.text[2]}/>
                          </div>
                      </div>
                  </Col>
                  <Col md={6} className='right-side right-aligned-picture'>
                      <div className='text-with-borderbox responsive-text-1'>
                          <ParticleSubheader {...this.props.particles.h2[1]}/>
                          <ParticleText {...this.props.particles.text[1]}/>
                      </div>
                      <ParticleImage {...this.props.data.field_particles[3]}/>
                  </Col>
              </Row>
              <Row>
                  <Col md={6} className='centered-picture'>
                      <ParticleImage {...this.props.data.field_particles[4]}/>
                  </Col>
                  <Col md={6} className='text-with-borderbox responsive-text-3'>
                      <ParticleSubheader {...this.props.particles.h2[2]}/>
                      <ParticleText {...this.props.particles.text[3]}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default PictureIntensive2
