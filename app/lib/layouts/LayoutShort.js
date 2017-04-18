// import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
// window.React = React

import ArticleIntro from '../components/base/ArticleIntro'
import DatePublished from '../components/base/DatePublished'
import Separator from '../components/base/Separator'
import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'
import ContributorList from '../containers/ContributorList'
import ParticlePullquote from '../components/particles/ParticlePullquote'
import ParticleText from '../components/particles/ParticleText'

class LayoutShort extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div className='layout layout-short'>
          <Container fluid classes='panel-1' backgroundImage={this.props.data.field_particles[0]}>
              <Container>
                  <Row>
                      <Col sm={6} className='article-meta'>
                          <ArticleHeader ArticleCategory={this.props.data.field_main_topics[0]} ArticleTitle={this.props.data.field_headline.field_longtext}/>
                          <ArticleIntro {...this.props.particles.text[0]} bordered/>
                      </Col>
                  </Row>
              </Container>
          </Container>
          <Container classes='article-byline'>
              <Row>
                  <Col md={8}>
                      <ContributorList data={this.props.data.field_contributors} inline separator=', '/>
                  </Col>
                  <Col md={4}>
                      <DatePublished value={this.props.data.created} date_format='MMMM D, YYYY'/>
                  </Col>
              </Row>
          </Container>
          <Container classes='article'>
              <Row>
                  <Col className='text-with-columns'>
                      <ParticleText {...this.props.particles.text[1]}/>
                      <ParticlePullquote {...this.props.particles.pullquote[0]}/>
                      <ParticleText {...this.props.particles.text[2]}/>
                  </Col>
              </Row>
          </Container>
      </div>

    )
  }
}

export default LayoutShort
